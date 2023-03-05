import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/portfolio.interface';
import { ModalService } from 'src/app/services/modal.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  urlBase:string = environment.apiURL;
  contacto!:Contacto;

  miFormulario: FormGroup = this.fb.group({
    nombre_completo: ['', [Validators.required,Validators.minLength(5)], ],
    email: ['',[Validators.required,Validators.email]],
    mensaje: ['',[Validators.required,Validators.minLength(10)]]

  })

  constructor( private fb: FormBuilder,private http:HttpClient, private router:Router, public modalService:ModalService) {

   }

   guardarContacto(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return

    }
    console.log(this.miFormulario.value,this.urlBase)
    this.contacto = this.miFormulario.value;
    this.http.post(`${this.urlBase}contacto`,this.contacto).subscribe();
    this.modalService.closeModal();
    this.router.navigate(['/']);
    

   }

  ngOnInit(): void {
    
  }

}
