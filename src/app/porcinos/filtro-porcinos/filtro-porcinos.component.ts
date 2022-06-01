import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { RazasService } from 'src/app/razas/razas.service';
import { PorcinosService } from '../porcinos.service';
import { Location } from '@angular/common';
import { clienteDTO } from 'src/app/clientes/clientes';
import { porcinoDTO } from '../porcinos';
import { razaDTO } from 'src/app/razas/razas';
import { PageEvent } from '@angular/material/paginator';
import { calculateAge } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-filtro-porcinos',
  templateUrl: './filtro-porcinos.component.html',
  styleUrls: ['./filtro-porcinos.component.css'],
})
export class FiltroPorcinosComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private porcinosService: PorcinosService,
    private razaService: RazasService,
    private clientesService: ClientesService
  ) {}

  form!: FormGroup;
  clientes: clienteDTO[] = [];
  razas: razaDTO[] = [];
  porcinos: porcinoDTO[] = [];
  paginaActual = 1;
  cantidadElementosAMostrar = 10;
  cantidadElemento = 0;
  columnasAMostrar = [
    'identificacion',
    'raza',
    'edad',
    'peso',
    'alimentacion',
    'cliente',
  ];

  formularioOriginal = {
    razaId: 0,
    clienteId: 0,
  };

  ngOnInit(): void {
    this.cargarRazas();
    this.cargarClientes();
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPorcinos(this.form.value);

    this.form.valueChanges.subscribe((valores) => {
      this.buscarPorcinos(valores);
      this.escribirParametrosBusquedaEnURL();
    });
  }

  cargarClientes() {
    this.clientesService.obtenerTodos().subscribe((respuesta) => {
      this.clientes = respuesta;
    });
  }

  cargarRazas() {
    this.razaService.obtenerTodos().subscribe((respuesta) => {
      this.razas = respuesta;
    });
  }

  private leerValoresURL() {
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      // if (params.clienteId) {
      //   objeto.generoId = Number(params.generoId);
      // }

      this.form.patchValue(objeto);
    });
  }

  private escribirParametrosBusquedaEnURL() {
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if (valoresFormulario.clienteId != '0') {
      queryStrings.push(`clienteId=${valoresFormulario.clienteId}`);
    }

    if (valoresFormulario.razaId != '0') {
      queryStrings.push(`razaId=${valoresFormulario.razaId}`);
    }

    this.location.replaceState('porcinos/filtrar', queryStrings.join('&'));
  }

  buscarPorcinos(valores: any) {
    valores.pagina = this.paginaActual;
    valores.recordsPorPagina = this.cantidadElementosAMostrar;
    this.porcinosService.filtrar(valores).subscribe((response) => {
      this.porcinos = response.body;
      this.escribirParametrosBusquedaEnURL();
    });
  }

  limpiar() {
    this.form.patchValue(this.formularioOriginal);
  }

  paginatorUpdate(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadElementosAMostrar = datos.pageSize;
    this.buscarPorcinos(this.form.value);
  }

  calcularEdadPorcino(date: any): number {
    return calculateAge(date);
  }
}
