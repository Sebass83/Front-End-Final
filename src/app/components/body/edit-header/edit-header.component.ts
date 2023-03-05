import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import {
  InfoPortfolio,
  PortfolioResponse,
} from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css'],
})
export class EditHeaderComponent implements OnInit {
  resultado: PortfolioResponse = <PortfolioResponse>{};
  editar: boolean = false;
  portfolio!: InfoPortfolio;
  urlBase: string = environment.apiURL;

  miFormulario: FormGroup = this.fb.group({
    informacion_titulo: [, [Validators.required, Validators.minLength(5)]],
    saludo_titulo: [, [Validators.required, Validators.minLength(5)]],
    saludo_descripcion: [, [Validators.required, Validators.minLength(5)]],
    github_url: [, [Validators.required, Validators.minLength(5)]],
    cv_url: [, [Validators.required, Validators.minLength(5)]],
    foto_perfil: [, [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private portfolioService: PortfolioService,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.portfolioService.traerPortfolio().subscribe((resp) => {
      this.resultado = resp;
      this.miFormulario.setValue({
        informacion_titulo: this.resultado.informacion_titulo,
        saludo_titulo: this.resultado.saludo_titulo,
        saludo_descripcion: this.resultado.saludo_descripcion,
        github_url: this.resultado.github_url,
        cv_url: this.resultado.cv_url,
        foto_perfil: this.resultado.foto_perfil,
      });
    });
  }

  toogleEditar(): void {
    this.editar = !this.editar;
  }

  editarPortfolio(): void {
    this.portfolio = this.miFormulario.value;
    this.portfolio.id_portfolio = 1;
    const currentUser = this.authService.UsuarioAutenticado;
    console.log(currentUser);
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });
    this.http
      .put(`${this.urlBase}portfolio`, this.portfolio, { headers: headers })
      .pipe(
        tap(() => this.portfolioService.refresh$.next())
      ).subscribe();
  }
}
