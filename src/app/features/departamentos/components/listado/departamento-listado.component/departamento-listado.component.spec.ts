import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoListadoComponent } from './departamento-listado.component';

describe('DepartamentoListadoComponent', () => {
  let component: DepartamentoListadoComponent;
  let fixture: ComponentFixture<DepartamentoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
