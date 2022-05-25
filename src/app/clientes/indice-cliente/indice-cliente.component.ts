import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { clienteDTO } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-indice-cliente',
  templateUrl: './indice-cliente.component.html',
  styleUrls: ['./indice-cliente.component.css'],
})
export class IndiceClienteComponent implements OnInit {
  constructor(private clienteService: ClientesService) {}
  cliente: clienteDTO[] = [];
  columnasAMostrar = [
    'id',
    'cedula',
    'nombres',
    'apellidos',
    'direccion',
    'telefono',
    'acciones',
  ];
  cantidadTotalRegistros = 0;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.clienteService
      .obtenerPaginado(pagina, cantidadElementosAMostrar)
      .subscribe(
        (respuesta: HttpResponse<clienteDTO[]>) => {
          if (respuesta.body) this.cliente = respuesta.body;
          let cantidadRegistros = respuesta.headers.get(
            'cantidadTotalRegistros'
          );
          if (cantidadRegistros)
            this.cantidadTotalRegistros = parseInt(cantidadRegistros);
        },
        (error) => console.error(error)
      );
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number) {
    this.clienteService.borrar(id).subscribe(
      () => {
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
      },
      (error) => console.error(error)
    );
  }
}
