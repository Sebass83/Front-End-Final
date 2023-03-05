import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public contacto = false;
  public login = false;

  constructor() {}

  public toogleModalContacto() {
    this.contacto = !this.contacto;
  }
  public toogleModalLogin() {
    this.login = !this.login;
  }

  public closeModal() {
    this.login = false;
    this.contacto = false;

  }
}
