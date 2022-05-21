import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlimentacionComponent } from './crear-alimentacion.component';

describe('CrearAlimentacionComponent', () => {
  let component: CrearAlimentacionComponent;
  let fixture: ComponentFixture<CrearAlimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAlimentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
