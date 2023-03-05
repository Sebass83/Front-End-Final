import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { ExperienciaLaboral } from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editor-experiencia-laboral',
  templateUrl: './editor-experiencia-laboral.component.html',
  styleUrls: ['./editor-experiencia-laboral.component.css'],
})
export class EditorExperienciaLaboralComponent implements OnInit {
  @Input() experienciaLaboral!: ExperienciaLaboral;
  urlBase: string = environment.apiURL;
  experienciaEdit!: ExperienciaLaboral;

  editExperienciaForm: FormGroup = this.fb.group({
    empresa: [, [Validators.required]],
    puesto: [, [Validators.required]],
    descripcion: [, [Validators.required]],
    desde: [, [Validators.required]],
    hasta: [, []],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    this.editExperienciaForm.setValue({
      empresa: this.experienciaLaboral.empresa,
      puesto: this.experienciaLaboral.puesto,
      descripcion: this.experienciaLaboral.descripcion,
      desde: this.formatearDateEditor(this.experienciaLaboral.desde),
      hasta: this.formatearDateEditor(this.experienciaLaboral.hasta),
    });
  }

  editarExperiencia(id: any) {
    this.experienciaEdit = this.editExperienciaForm.value;
    this.experienciaEdit.id_experiencia_laboral =
      this.experienciaLaboral.id_experiencia_laboral;
    this.experienciaEdit.desde = this.formatearDateGuardar(
      this.editExperienciaForm.value.desde
    );
    this.experienciaEdit.hasta = this.formatearDateGuardar(
      this.editExperienciaForm.value.hasta
    );
    console.log(this.experienciaEdit);

    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });

    this.http
      .put(`${this.urlBase}experiencia`, this.experienciaEdit, {
        headers: headers,
      })
      .pipe(tap(() => this.portfolioService.refresh$.next()))
      .subscribe();
  }
  eliminarExperiencia(id: any) {
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });
    this.http
      .delete(`${this.urlBase}experiencia/${id}`, { headers: headers })
      .pipe(tap(() => this.portfolioService.refresh$.next()))
      .subscribe();
  }
  formatearDateEditor(fecha: any): any {
    let date = fecha.toString().slice(0, 10).split('-');
    date[2] = (date[2] - 1).toString();
    if (date[2].length == 1) {
      date[2] = '0' + date[2];
    }

    date.join('-');

    return date.join('-');
  }

  formatearDateGuardar(fecha: any): any {
    let date = fecha + ' 21:00:00';
    return new Date(date);
  }
}
