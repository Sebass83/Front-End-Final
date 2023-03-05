import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module'
import { BodyModule } from './components/body/body.module';
import { FooterModule } from './components/footer/footer.module';
import { LoginModule } from './components/login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainModalComponent } from './components/modals/main-modal/main-modal.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { MisMensajesComponent } from './components/perfil/mis-mensajes/mis-mensajes.component';
import { ContentMesajeComponent } from './components/perfil/mis-mensajes/content-mesaje/content-mesaje.component';




@NgModule({
  declarations: [
    AppComponent,
    MainModalComponent,
    PerfilComponent,
    MisMensajesComponent,
    ContentMesajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    HeaderModule,
    BodyModule,
    FooterModule,
    LoginModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
