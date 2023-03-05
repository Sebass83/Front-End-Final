import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Tecnologia } from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tecnologia-skills-form',
  templateUrl: './tecnologia-skills-form.component.html',
  styleUrls: ['./tecnologia-skills-form.component.css'],
})
export class TecnologiaSkillsFormComponent implements OnInit {
  @Input() tecnologia!: Tecnologia;

  tecnologiaEdit!: Tecnologia;
  urlBase:string = environment.apiURL;

  tecnologiaSkillGroup: FormGroup = this.fb.group({
    nombre_tecnologia: [, [Validators.required]],
    svg_url: [, [Validators.required]],
    color: [, [Validators.required]],
    porcentaje: [, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private http: HttpClient,private authService:AuthService, private portfolioService:PortfolioService) {}

  ngOnInit(): void {
    this.tecnologiaSkillGroup.setValue({
      nombre_tecnologia: this.tecnologia.nombre_tecnologia,
      svg_url: this.tecnologia.svg_url,
      color: this.tecnologia.color,
      porcentaje: this.tecnologia.porcentaje,
    });
  }

  editarTecnologia(id: number): void {
    this.tecnologiaEdit = this.tecnologiaSkillGroup.value
    this.tecnologiaEdit.id_tecnologia = this.tecnologia.id_tecnologia
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      'Authorization': currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'});
    this.http.put(`${this.urlBase}tecnologia`,this.tecnologiaEdit,{headers:headers}).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe();
  }

  eliminarTecnologia(id:number): void {
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      'Authorization': currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'});
    this.http.delete(`${this.urlBase}tecnologia/${id}`,{headers:headers}).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe();
  }
}
