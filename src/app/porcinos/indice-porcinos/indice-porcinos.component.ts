import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { porcinoDTO } from '../porcinos';
import { PorcinosService } from '../porcinos.service';
import { calculateAge } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-indice-porcinos',
  templateUrl: './indice-porcinos.component.html',
  styleUrls: ['./indice-porcinos.component.css'],
})
export class IndicePorcinosComponent implements OnInit {
  constructor(private porcinoService: PorcinosService) {}

  porcino: porcinoDTO[] = [];
  columnasAMostrar = [
    'identificacion',
    'raza',
    'edad',
    'peso',
    'alimentacion',
    'cliente',
    'acciones',
  ];
  cantidadTotalRegistros = 0;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.porcinoService
      .obtenerPaginado(pagina, cantidadElementosAMostrar)
      .subscribe(
        (respuesta: HttpResponse<porcinoDTO[]>) => {
          if (respuesta.body) this.porcino = respuesta.body;
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
    this.porcinoService.borrar(id).subscribe(
      () => {
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
      },
      (error) => console.error(error)
    );
  }

  calcularEdadPorcino(date: any): number {
    return calculateAge(date);
  }
}
