import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogitamientoTipoRescatistaComponent } from './escogitamiento-tipo-rescatista.component';

describe('EscogitamientoTipoRescatistaComponent', () => {
  let component: EscogitamientoTipoRescatistaComponent;
  let fixture: ComponentFixture<EscogitamientoTipoRescatistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscogitamientoTipoRescatistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscogitamientoTipoRescatistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
