import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService, private route:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.UsuarioAutenticado;
    const headers = new HttpHeaders({
      'Authorization': currentUser.Authorization,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      
      
    })
    
    

      if (currentUser && currentUser.Authorization && this.route.url !== "/"  && this.route.url !== "") {
        req=req.clone({
           headers
        })
      }else{
        req=req.clone({
        
       })
      }

    return next.handle(req);
  }
}
