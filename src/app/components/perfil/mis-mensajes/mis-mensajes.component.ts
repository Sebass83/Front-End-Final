import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto, MensajeResponse } from 'src/app/interfaces/portfolio.interface';
import { ContactoService } from 'src/app/services/contacto.service';


@Component({
  selector: 'app-mis-mensajes',
  templateUrl: './mis-mensajes.component.html',
  styleUrls: ['./mis-mensajes.component.css']
})
export class MisMensajesComponent implements OnInit {
 mensajes = <MensajeResponse>{}
 visible: boolean = false;
 

  constructor(private contacto$: ContactoService,private router:Router,) { 

  }

  ngOnInit(): void {
    this.contacto$.traerMensajes().subscribe(resp => {
      this.mensajes.results = resp;
      
    })
  }

  eliminar(mensaje:Contacto): void {
    this.contacto$.eliminarMensajes(mensaje.id_Contacto!);
    this.mensajes.results = this.mensajes.results.filter(m =>m.id_Contacto !== mensaje.id_Contacto)
    // this.router.navigate(['/perfil'])
  }

  toogleVisible(): void {
    this.visible = !this.visible;
  }

}
