import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExperienciaLaboralComponent } from './edit-experiencia-laboral.component';

describe('EditExperienciaLaboralComponent', () => {
  let component: EditExperienciaLaboralComponent;
  let fixture: ComponentFixture<EditExperienciaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExperienciaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExperienciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
