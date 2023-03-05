import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { Estudio, PortfolioResponse } from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit {
  resultado: PortfolioResponse = <PortfolioResponse>{};
  editar: boolean = false;
  crear: boolean = false;
  urlBase: string = environment.apiURL;
  suscription!:Subscription;


  newEstudio: FormGroup = this.fb.group({
    es_carrera:       ["", [Validators.required]],
    nombre_estudio:   [, [Validators.required]],
    finalizado:       ["", [Validators.required]],
    entidad_educador: [, [Validators.required]],
    img_entidad:      [, [Validators.required]],
    titulo:           [,],
    descripcion:      [, [Validators.required]],
    titulo_Url:       [,]
  })

  constructor(
    private portfolioService: PortfolioService,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.portfolioService.traerPortfolio().subscribe((resp) => {
      this.resultado = resp;
    });

    this.suscription = this.portfolioService.refresh$.subscribe(()=>{
      this.portfolioService.traerPortfolio().subscribe(resp=>{
        this.resultado = resp
      })
    })
  }

  toogleEditar(){
    this.editar = !this.editar;
    this.crear = false;


  }
  nuevoEstudio(){
    this.crear = !this.crear;
    this.editar = false;
  }

  crearEstudio(){
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });
    this.http.post(`${this.urlBase}estudio`,this.newEstudio.value,{ headers: headers }).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe()

    this.newEstudio.reset();
   }
   

  }


