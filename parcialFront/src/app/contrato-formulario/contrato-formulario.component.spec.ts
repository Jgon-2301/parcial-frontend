import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoFormularioComponent } from './contrato-formulario.component';

describe('ContratoFormularioComponent', () => {
  let component: ContratoFormularioComponent;
  let fixture: ComponentFixture<ContratoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratoFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
