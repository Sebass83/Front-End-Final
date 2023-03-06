import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PortfolioResponse } from '../interfaces/portfolio.interface';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  urlBase = environment.apiURL;

  public resultado:PortfolioResponse = <PortfolioResponse>{}
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { 
    
    this.traerPortfolio();
  }

  get refresh$(){
    return this._refresh$
  }

  traerPortfolio():Observable<PortfolioResponse>{
 
     return this.http.get<PortfolioResponse>(`${this.urlBase}portfolio/1`)

  }

}


