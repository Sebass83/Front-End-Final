import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs';
import { Proyecto, Tecnologia } from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editor-proyectos',
  templateUrl: './editor-proyectos.component.html',
  styleUrls: ['./editor-proyectos.component.css'],
})
export class EditorProyectosComponent implements OnInit {
  @Input() proyecto!: Proyecto;
  @Input() tecnologias!: Tecnologia[];
  urlBase: string = environment.apiURL;

  miFormulario: FormGroup = this.fb.group({
    imgURL_proyecto: [, [Validators.required, Validators.minLength(5)]],
    titulo_proyecto: [, [Validators.required, Validators.minLength(5)]],
    descripcion_proyecto: [, [Validators.required, Validators.minLength(5)]],
    github_proyecto: [],
    url_proyecto: [],
  });

  tecnoAddFormulario: FormGroup = this.fb.group({
    id_tecnologia: [, [Validators.required, Validators.minLength(1)]],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private portfolioService: PortfolioService

  ) {}

  ngOnInit(): void {
    this.miFormulario.setValue({
      titulo_proyecto: this.proyecto.titulo_proyecto,
      descripcion_proyecto: this.proyecto.descripcion_proyecto,
      imgURL_proyecto: this.proyecto.imgURL_proyecto,
      github_proyecto: this.proyecto.github_proyecto,
      url_proyecto: this.proyecto.url_proyecto,
    });
    this.tecnoAddFormulario.setValue({
      id_tecnologia: '',
    });
  }

  agregarTecnologia(): void {
    const hasTecno = {
      id_proyecto: this.proyecto.id_proyecto,
      id_tecnologia: parseInt(this.tecnoAddFormulario.value.id_tecnologia),
    };

    const addTecno = this.tecnologias.find(
      (tecnologia) => tecnologia.id_tecnologia == hasTecno.id_tecnologia
    );

    if (addTecno) {
      const tecno: Tecnologia = {
        id_tecnologia: addTecno.id_tecnologia,
        nombre_tecnologia: addTecno.nombre_tecnologia,
        svg_url: addTecno.svg_url,
        color: addTecno.color,
        porcentaje: addTecno.porcentaje,
      };

      this.proyecto.tecnologias.push({ ...tecno });
    }
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });
    this.http.post(`${this.urlBase}phs`,hasTecno,{ headers: headers }).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe();
    this.tecnoAddFormulario.setValue({
      id_tecnologia: '',
    });
  
  }

  eliminarProyecto(id:number) {

    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });

    this.http.delete(`${this.urlBase}proyectos/${id}`,{ headers: headers }).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe()

  }

  editarProyectoInfo() {
    let proyecto = this.miFormulario.value
    proyecto.id_proyecto = this.proyecto.id_proyecto

    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });

    this.http.put(`${this.urlBase}proyectos`,proyecto,{ headers: headers }).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe()


  }

  eliminarProyectoTecnologia(idProyecto:number,idtecnologia:number ) {
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      Authorization: currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
    });

    this.http.delete(`${this.urlBase}phs/tecno/${idProyecto}/${idtecnologia}`,{ headers: headers }).pipe(
      tap(() => this.portfolioService.refresh$.next())
    ).subscribe()

  }


}
