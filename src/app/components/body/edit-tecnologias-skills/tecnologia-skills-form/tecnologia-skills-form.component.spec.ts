import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaSkillsFormComponent } from './tecnologia-skills-form.component';

describe('TecnologiaSkillsFormComponent', () => {
  let component: TecnologiaSkillsFormComponent;
  let fixture: ComponentFixture<TecnologiaSkillsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaSkillsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
