import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ModalService } from './services/modal.service';
import {PortfolioService} from"./services/portfolio.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';
  isLoggedIn = false;

  
  get resultados(){
    return this.portfolio.resultado
  }

  isLogin():boolean{
    let currentUser = this.authService.UsuarioAutenticado;
    if(currentUser && currentUser.Authorization){
      this.isLoggedIn= true
      return true;
    }
    this.isLoggedIn=false;
    return false;
  }


  constructor(
    private portfolio: PortfolioService,
    public modalService:ModalService,
    private authService:AuthService){

  }

  ngOnInit(): void {
  

  }










}
