import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTecnologiasSkillsComponent } from './edit-tecnologias-skills.component';

describe('EditTecnologiasSkillsComponent', () => {
  let component: EditTecnologiasSkillsComponent;
  let fixture: ComponentFixture<EditTecnologiasSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTecnologiasSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTecnologiasSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
