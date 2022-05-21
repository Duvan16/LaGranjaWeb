import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceAlimentacionComponent } from './indice-alimentacion.component';

describe('IndiceAlimentacionComponent', () => {
  let component: IndiceAlimentacionComponent;
  let fixture: ComponentFixture<IndiceAlimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceAlimentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
