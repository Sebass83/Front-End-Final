import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { PortfolioResponse } from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css'],
})
export class EditProyectosComponent implements OnInit {
  resultado: PortfolioResponse = <PortfolioResponse>{};
  editar: boolean = false;
  crear: boolean = false;
  urlBase: string = environment.apiURL;
  suscription!:Subscription;

  newProyec: FormGroup = this.fb.group({
    imgURL_proyecto: [, [Validators.required, Validators.minLength(5)]],
    titulo_proyecto: [, [Validators.required, Validators.minLength(5)]],
    descripcion_proyecto: [, [Validators.required, Validators.minLength(5)]],
    github_proyecto: [],
    url_proyecto: [],
  });

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
    this.crear = false;
  }

  nuevoProyecto(): void {
    this.crear = !this.crear;
    this.editar = false;
  }

  crearProyecto() {
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });
    this.http.post(`${this.urlBase}proyecto`,this.newProyec.value,{ headers: headers }).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe()
    this.newProyec.reset()
  }

}
