import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContratoService } from '../contrato.service';
import { Contrato } from '../modelo/Usuario';

@Component({
  selector: 'app-contrato-formulario',
  templateUrl: './contrato-formulario.component.html',
  styleUrls: ['./contrato-formulario.component.css']
})
export class ContratoFormularioComponent implements OnInit {
  contrato: Contrato = {
    id: 0,
    identificador: '',
    valor: 0,
    nombreContratante: '',
    documentoContratante: '',
    nombreContratantista: '',
    documentoContratantista: '',
    fechaInicial: '',
    fechaFinal: ''
  };

  constructor(
    private contratoService: ContratoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getContrato(id);
    }
  }

  getContrato(id: string): void {
    this.contratoService.getContrato(id).subscribe(data => {
      this.contrato = data;
    });
  }

  guardar(): void {
    if (this.contrato.id === 0) {
      this.contratoService.createContrato(this.contrato).subscribe(() => {
        this.router.navigate(['/contratos']);
      });
    } else {
      this.contratoService.updateContrato(this.contrato).subscribe(() => {
        this.router.navigate(['/contratos']);
      });
    }
  }
}

