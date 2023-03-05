import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEstudioComponent } from './editor-estudio.component';

describe('EditorEstudioComponent', () => {
  let component: EditorEstudioComponent;
  let fixture: ComponentFixture<EditorEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
