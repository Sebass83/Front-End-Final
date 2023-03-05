import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorProyectosComponent } from './editor-proyectos.component';

describe('EditorProyectosComponent', () => {
  let component: EditorProyectosComponent;
  let fixture: ComponentFixture<EditorProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 