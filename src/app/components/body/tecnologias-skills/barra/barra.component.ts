import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  @Input() tecnoColors: string ="";
  @Input() porcentaje: number =0;
  porcentajeCSS: string = "";

  constructor(

    

  ) { }

  ngOnInit(): void {
    this.porcentajeCSS= this.porcentaje.toString()+"%";

  }
  

}
