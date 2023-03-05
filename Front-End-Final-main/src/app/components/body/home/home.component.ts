import { Component, OnInit ,Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioResponse } from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resultado:PortfolioResponse = <PortfolioResponse>{}
  suscription!:Subscription
  public IsLoggedIn:boolean;


  constructor(private portfolioService:PortfolioService,private authService:AuthService) { 
    this.IsLoggedIn = this.authService.IsLoggedIn
  }

  ngOnInit(): void {
    this.portfolioService.traerPortfolio().subscribe(resp=>{
      this.resultado = resp
    })


    this.suscription = this.portfolioService.refresh$.subscribe(()=>{
      this.portfolioService.traerPortfolio().subscribe(resp=>{
        this.resultado = resp
      })
    })

   

  }

  

}
