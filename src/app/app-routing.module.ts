import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/body/contacto/contacto.component';
import { HomeComponent } from './components/body/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
{
  path:'',
  component: HomeComponent,
  pathMatch:"full"
},
{
  path:"contacto",
  component: ContactoComponent
},
{
  path:"perfil",
  component: PerfilComponent, canActivate:[GuardGuard]
},
{
  path:"**",
  redirectTo:""
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
