import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ExperienciaLaboral, PortfolioResponse } from 'src/app/interfaces/portfolio.interface';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  @Input() resultado:PortfolioResponse = <PortfolioResponse>{}

  constructor( private fb: FormBuilder,) { }

  ngOnInit(): void {
  }


}
