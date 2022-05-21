import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { alimentacionDTO } from '../alimentacion';
import { AlimentacionService } from '../alimentacion.service';

@Component({
  selector: 'app-indice-alimentacion',
  templateUrl: './indice-alimentacion.component.html',
  styleUrls: ['./indice-alimentacion.component.css'],
})
export class IndiceAlimentacionComponent implements OnInit {
  constructor(private alimentacionService: AlimentacionService) {}

  alimentacion: alimentacionDTO[] = [];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros = 0;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.alimentacionService
      .obtenerPaginado(pagina, cantidadElementosAMostrar)
      .subscribe(
        (respuesta: HttpResponse<alimentacionDTO[]>) => {
          if (respuesta.body) this.alimentacion = respuesta.body;
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
    this.alimentacionService.borrar(id).subscribe(
      () => {
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
      },
      (error) => console.error(error)
    );
  }
}
