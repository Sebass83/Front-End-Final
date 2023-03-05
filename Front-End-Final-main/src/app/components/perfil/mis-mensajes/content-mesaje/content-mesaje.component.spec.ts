import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMesajeComponent } from './content-mesaje.component';

describe('ContentMesajeComponent', () => {
  let component: ContentMesajeComponent;
  let fixture: ComponentFixture<ContentMesajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMesajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentMesajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
