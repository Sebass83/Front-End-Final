import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasSkillsComponent } from './tecnologias-skills.component';

describe('TecnologiasSkillsComponent', () => {
  let component: TecnologiasSkillsComponent;
  let fixture: ComponentFixture<TecnologiasSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiasSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
