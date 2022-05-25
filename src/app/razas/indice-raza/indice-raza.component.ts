import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { razaDTO } from '../razas';
import { RazasService } from '../razas.service';

@Component({
  selector: 'app-indice-raza',
  templateUrl: './indice-raza.component.html',
  styleUrls: ['./indice-raza.component.css'],
})
export class IndiceRazaComponent {
  constructor(private razaService: RazasService) {}

  raza: razaDTO[] = [];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros = 0;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.razaService
      .obtenerPaginado(pagina, cantidadElementosAMostrar)
      .subscribe(
        (respuesta: HttpResponse<razaDTO[]>) => {
          if (respuesta.body) this.raza = respuesta.body;
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
    this.razaService.borrar(id).subscribe(
      () => {
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
      },
      (error) => console.error(error)
    );
  }
}
