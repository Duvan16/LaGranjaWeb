import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlimentacionComponent } from './formulario-alimentacion.component';

describe('FormularioAlimentacionComponent', () => {
  let component: FormularioAlimentacionComponent;
  let fixture: ComponentFixture<FormularioAlimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAlimentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
