import { Component, Input, OnInit } from '@angular/core';
import { Estudio, PortfolioResponse } from 'src/app/interfaces/portfolio.interface';
import { ModalService } from 'src/app/services/modal.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
 @Input() resultado:PortfolioResponse = <PortfolioResponse>{}

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    
  }

  public estudios:Estudio[] = [
    {
      "id_estudio": 1,
      "es_carrera": true,
      "nombre_estudio": "Licenciatura en disño y comunicación visual",
      "finalizado": false,
      "entidad_educador": "Universidad de Lanús",
      "img_entidad": "http://www.unla.edu.ar/images/logo_web.jpg",
      "titulo": "",
      "descripcion": "Curzado hasta tercer año de la carrera",
      "titulo_Url": "",
    },
    {
      "id_estudio": 2,
      "es_carrera": 0,
      "nombre_estudio": "Node.js",
      "finalizado": true,
      "entidad_educador": "Udemy",
      "titulo": "Node.js - Creando API con Express y MongoDB (Incl. Deno)",
      "descripcion":" Se vio en el curso ....",
      "img_entidad": "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      "titulo_Url": "https://udemy-certificate.s3.amazonaws.com/image/UC-4e802311-1788-4f52-97cf-a80b92eb0307.jpg?v=1646528170000",
    },
    {
      "id_estudio": 3,
      "es_carrera": false,
      "nombre_estudio": "Node.js",
      "finalizado": 1,
      "entidad_educador": "Udemy",
      "titulo": "Node.js - Creando API con Express y MongoDB (Incl. Deno)",
      "descripcion":" En el curso se vio....",
      "img_entidad": "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      "titulo_Url": "https://udemy-certificate.s3.amazonaws.com/image/UC-4e802311-1788-4f52-97cf-a80b92eb0307.jpg?v=1646528170000",
    }
  ]



}
