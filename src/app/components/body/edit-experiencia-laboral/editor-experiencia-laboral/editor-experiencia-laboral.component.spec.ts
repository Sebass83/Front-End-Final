import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorExperienciaLaboralComponent } from './editor-experiencia-laboral.component';

describe('EditorExperienciaLaboralComponent', () => {
  let component: EditorExperienciaLaboralComponent;
  let fixture: ComponentFixture<EditorExperienciaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorExperienciaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorExperienciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
