import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaCrearComponent } from './escuela-crear.component';

describe('EscuelaCrearComponent', () => {
  let component: EscuelaCrearComponent;
  let fixture: ComponentFixture<EscuelaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscuelaCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscuelaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
