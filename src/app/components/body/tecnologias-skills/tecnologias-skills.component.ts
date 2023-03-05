import { Component, OnInit, Input } from '@angular/core';
import { PortfolioResponse } from 'src/app/interfaces/portfolio.interface';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-tecnologias-skills',
  templateUrl: './tecnologias-skills.component.html',
  styleUrls: ['./tecnologias-skills.component.css']
})
export class TecnologiasSkillsComponent implements OnInit {
  @Input() resultado:PortfolioResponse = <PortfolioResponse>{}

  tecnologias = this.resultado.tecnologias

  constructor(public modalService:ModalService) { }

  ngOnInit(): void {
  }

}
