import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  xmlReq = new XMLHttpRequest();
  miFormulario:FormGroup;

  constructor(  private fb:FormBuilder,
                private router:Router,
                public modalService:ModalService,
                private authService:AuthService) {
                  this.miFormulario = this.fb.group({
                    email: ["",[Validators.email, Validators.required ]],
                    password: ["",[Validators.required, Validators.minLength(6)]]
                  });
                }

  login(event:Event){
    event.preventDefault;
    const {email,password} = this.miFormulario.value
    this.authService.login(email,password).subscribe((data:any) => {
      this.modalService.closeModal();
      this.router.navigate(['/perfil']);


    })
  
  }                

  ngOnInit(): void {
}

get Email(){
  return this.miFormulario.get('email');
}

get Password(){
  return this.miFormulario.get('password');
}

}
