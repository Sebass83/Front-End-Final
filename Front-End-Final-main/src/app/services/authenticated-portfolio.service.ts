import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PortfolioResponse } from '../interfaces/portfolio.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedPortfolioService {
  urlBase = environment.apiURL;

  public resultado: PortfolioResponse = <PortfolioResponse>{};

  constructor(private http: HttpClient, authService: AuthService) {
    this.traerPortfolio();
  }

  traerPortfolio(): Observable<PortfolioResponse> {
    return this.http.get<PortfolioResponse>(`${this.urlBase}auth/portfolio/1`);
  }
}
