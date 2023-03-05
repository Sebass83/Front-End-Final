import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Estudio } from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editor-estudio',
  templateUrl: './editor-estudio.component.html',
  styleUrls: ['./editor-estudio.component.css']
})
export class EditorEstudioComponent implements OnInit {

  @Input()estudio!: Estudio;
  urlBase: string = environment.apiURL;
  estudioEdit!:Estudio

  editEstudioForm: FormGroup = this.fb.group({
    nombre_estudio: [, [Validators.required]],
    es_carrera: [, [Validators.required]],
    finalizado: [, [Validators.required]],
    entidad_educador: [, [Validators.required]],
    img_entidad: [, [Validators.required]],
    titulo: [,],
    descripcion: [, [Validators.required]],
    titulo_Url: [,],
  })



  constructor(   
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.editEstudioForm.setValue({
    nombre_estudio: this.estudio.nombre_estudio,
    es_carrera: this.estudio.es_carrera,
    finalizado: this.estudio.finalizado,
    entidad_educador: this.estudio.entidad_educador,
    img_entidad: this.estudio.img_entidad,
    titulo: this.estudio.titulo,
    descripcion: this.estudio.descripcion,
    titulo_Url: this.estudio.titulo_Url,

    })
  }

  editarEstudio(id:any):void{
    this.estudioEdit = this.editEstudioForm.value;
    this.estudioEdit.id_estudio = this.estudio.id_estudio;

    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      'Authorization': currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'});
    this.http.put(`${this.urlBase}estudio`,this.estudioEdit,{headers:headers}).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe();
  }

  eliminarEstudio(id:any):void{
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      'Authorization': currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'});
    this.http.delete(`${this.urlBase}estudio/${id}`,{headers:headers}).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe();
  
  }

}
