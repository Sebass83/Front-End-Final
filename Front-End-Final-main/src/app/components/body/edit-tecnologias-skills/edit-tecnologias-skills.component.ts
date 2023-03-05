import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import {
  PortfolioResponse,
} from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-tecnologias-skills',
  templateUrl: './edit-tecnologias-skills.component.html',
  styleUrls: ['./edit-tecnologias-skills.component.css'],
})
export class EditTecnologiasSkillsComponent implements OnInit {
  resultado: PortfolioResponse = <PortfolioResponse>{};
  editar: boolean = false;
  nuevaTecnologia: boolean = false; 
  urlBase: string = environment.apiURL;
  suscription!:Subscription;
 
  newTecnologiaSkillGroup:FormGroup = this.fb.group({
    nombre_tecnologia: [, [Validators.required]],
    svg_url: [, [Validators.required]],
    color: [, [Validators.required]],
    porcentaje: [, [Validators.required]],

  })

  constructor(

    private portfolioService: PortfolioService,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {}

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

  toogleEditar(): void {
    this.editar = !this.editar;
    this.nuevaTecnologia = false;
  }

  agregarTecnologia(): void {
    this.nuevaTecnologia = !this.nuevaTecnologia;
    this.editar = false;
  }

  newTecnoSkill(): void {
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });
    this.http.post(`${this.urlBase}tecnologia`,this.newTecnologiaSkillGroup.value,{ headers: headers }).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe()
  }
}
