import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioResponse } from 'src/app/interfaces/portfolio.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() resultado:PortfolioResponse = <PortfolioResponse>{}
  @Input() isLoggedIn:boolean = false;


  constructor(
    public modalService:ModalService, 
    private router:Router,
    private authService:AuthService,
    private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.traerPortfolio().subscribe(resp=>{
      this.resultado = resp
    })
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
    this.authService.currentUserSubjet.next(
      this.router.navigate(['/perfil'])
    );
  }

  descargarCV():void{
    //falta implementar

  }

}
