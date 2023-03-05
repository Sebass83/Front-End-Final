import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { TecnologiasSkillsComponent } from './tecnologias-skills/tecnologias-skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BarraComponent } from './tecnologias-skills/barra/barra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


import { EditProyectosComponent } from './edit-proyectos/edit-proyectos.component';
import { EditTecnologiasSkillsComponent } from './edit-tecnologias-skills/edit-tecnologias-skills.component';
import { EditHeaderComponent } from './edit-header/edit-header.component';
import { TecnologiaSkillsFormComponent } from './edit-tecnologias-skills/tecnologia-skills-form/tecnologia-skills-form.component';
import { EditorProyectosComponent } from './edit-proyectos/editor-proyectos/editor-proyectos.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { EditEstudiosComponent } from './edit-estudios/edit-estudios.component';
import { EditExperienciaLaboralComponent } from './edit-experiencia-laboral/edit-experiencia-laboral.component';
import { EditorEstudioComponent } from './edit-estudios/editor-estudio/editor-estudio.component';
import { EditorExperienciaLaboralComponent } from './edit-experiencia-laboral/editor-experiencia-laboral/editor-experiencia-laboral.component';



@NgModule({
  declarations: [
    InfoComponent,
    TecnologiasSkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    BarraComponent,
    HomeComponent,
    EditProyectosComponent,
    EditTecnologiasSkillsComponent,
    EditHeaderComponent,
    TecnologiaSkillsFormComponent,
    EditorProyectosComponent,
    ExperienciaLaboralComponent,
    EstudiosComponent,
    EditEstudiosComponent,
    EditExperienciaLaboralComponent,
    EditorEstudioComponent,
    EditorExperienciaLaboralComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], exports: [
    InfoComponent,
    TecnologiasSkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    BarraComponent,
    HomeComponent,
    ReactiveFormsModule

  ]
})
export class BodyModule { }
