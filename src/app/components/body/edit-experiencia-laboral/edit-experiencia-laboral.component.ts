import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { ExperienciaLaboral, PortfolioResponse } from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-experiencia-laboral',
  templateUrl: './edit-experiencia-laboral.component.html',
  styleUrls: ['./edit-experiencia-laboral.component.css']
})
export class EditExperienciaLaboralComponent implements OnInit {

  resultado: PortfolioResponse = <PortfolioResponse>{};
  editar: boolean = false;
  crear: boolean = false;
  urlBase: string = environment.apiURL;
  suscription!:Subscription;
  experiencia!:ExperienciaLaboral

  newExperiencia: FormGroup = this.fb.group({
    empresa:       [, [Validators.required]],
    puesto:   [, [Validators.required]],
    descripcion:       [, [Validators.required]],
    desde: [, [Validators.required]],
    hasta:      [, []],
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
  nuevaExperiencia(){
    this.crear = !this.crear;
    this.editar = false;
  }

  crearExperiencia(){
    console.log(this.newExperiencia.value.desde)
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });

    this.experiencia = this.newExperiencia.value
    this.experiencia.desde = this.formatearDateGuardar(this.experiencia.desde)
    this.experiencia.hasta = this.formatearDateGuardar(this.experiencia.hasta)
   
    
    this.http.post(`${this.urlBase}experiencia`,this.experiencia,{ headers: headers }).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe()

    this.newExperiencia.reset();
   }

   formatearDateGuardar(fecha:any):any{
    let date = fecha + " 21:00:00"
    return  new Date(date)
  }

}
