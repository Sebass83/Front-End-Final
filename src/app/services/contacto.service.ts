import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contacto, MensajeResponse } from '../interfaces/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  urlBase = environment.apiURL;
  public contacto: MensajeResponse = <MensajeResponse>{}

  constructor(private http:HttpClient) {
    this.traerMensajes()
   }

  traerMensajes():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(`${this.urlBase}contacto`)
  }

  eliminarMensajes(id:Number){
    this.http.delete(`${this.urlBase}contacto/${id}`).subscribe(data =>{
      console.log(`Se ha eliminado el mensaje con Id: ${id}`);
    }, err =>{
      console.log(err)
    });
    
  }


}
