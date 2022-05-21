import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlimentacionComponent } from './editar-alimentacion.component';

describe('EditarAlimentacionComponent', () => {
  let component: EditarAlimentacionComponent;
  let fixture: ComponentFixture<EditarAlimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlimentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
