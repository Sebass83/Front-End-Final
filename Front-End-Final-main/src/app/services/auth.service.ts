import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSubjet: any = BehaviorSubject;

  constructor(private http: HttpClient) {
    this.currentUserSubjet = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  login(email: string, password: string): Observable<any> {
    const urlBase = `${environment.apiURL}login`;
    const body = { email, password };

    return this.http.post(urlBase, JSON.stringify(body)).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubjet.next(data);

        return data;
      })
    );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubjet.value;
  }

  get IsLoggedIn() {
    this.currentUserSubjet.value;

    let currentUser = this.UsuarioAutenticado;
    if (currentUser && currentUser.Authorization) {
      return true;
    }
    return false;
  }
}
