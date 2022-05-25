import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { clienteCreacionDTO } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
})
export class CrearClienteComponent {
  errores: string[] = [];

  constructor(
    private router: Router,
    private clientesService: ClientesService
  ) {}

  guardarCambios(cliente: clienteCreacionDTO) {
    this.clientesService.crear(cliente).subscribe(
      () => {
        this.router.navigate(['/clientes']);
      },
      (error: any) => (this.errores = parsearErroresAPI(error))
    );
  }
}
