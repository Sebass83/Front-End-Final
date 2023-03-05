import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioResponse } from 'src/app/interfaces/portfolio.interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() resultado:PortfolioResponse = <PortfolioResponse>{}

  constructor( private route:Router) { }

  ngOnInit(): void {
   
  
  }

}
