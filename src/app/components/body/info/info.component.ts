import { Component, Input, OnInit } from '@angular/core';
import { PortfolioResponse } from 'src/app/interfaces/portfolio.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() resultado:PortfolioResponse = <PortfolioResponse>{}

  constructor() { }

  ngOnInit(): void {
    
  }

}
