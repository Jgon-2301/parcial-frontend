import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosListaComponent } from './contratos-lista.component';

describe('ContratosListaComponent', () => {
  let component: ContratosListaComponent;
  let fixture: ComponentFixture<ContratosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
