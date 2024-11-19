import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../contrato.service';
import { Contrato } from '../modelo/Usuario';

@Component({
  selector: 'app-contratos-lista',
  templateUrl: './contratos-lista.component.html',
  styleUrls: ['./contratos-lista.component.css']
})
export class ContratosListaComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) { }

  ngOnInit(): void {
    this.getContratos();
  }

  getContratos(): void {
    this.contratoService.getContratos().subscribe(data => {
      this.contratos = data;
    });
  }
}
