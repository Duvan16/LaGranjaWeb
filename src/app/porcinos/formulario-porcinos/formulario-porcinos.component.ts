import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { alimentacionDTO } from 'src/app/alimentacion/alimentacion';
import { AlimentacionService } from 'src/app/alimentacion/alimentacion.service';
import { clienteDTO } from 'src/app/clientes/clientes';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { razaDTO } from 'src/app/razas/razas';
import { RazasService } from 'src/app/razas/razas.service';
import { porcinoCreacionDTO, porcinoDTO } from '../porcinos';

@Component({
  selector: 'app-formulario-porcinos',
  templateUrl: './formulario-porcinos.component.html',
  styleUrls: ['./formulario-porcinos.component.css'],
})
export class FormularioPorcinosComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private razaService: RazasService,
    private alimentacionService: AlimentacionService,
    private clientesService: ClientesService
  ) {}

  form!: FormGroup;

  @Input()
  modelo?: porcinoDTO;

  @Input()
  errores: string[] = [];

  @Output()
  OnSubmit: EventEmitter<porcinoCreacionDTO> = new EventEmitter<porcinoCreacionDTO>();

  razas: razaDTO[] = [];
  alimentacion: alimentacionDTO[] = [];
  clientes: clienteDTO[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      razaId: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      peso: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      alimentacionId: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      clienteId: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      fechaNacimiento: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }

    this.cargarRazas();
    this.cargarAlimentacion();
    this.cargarClientes();
  }

  onSubmit() {
    this.OnSubmit.emit(this.form.value);
  }

  obtenerErrorCampoRaza() {
    var campo = this.form.get('razaId');
    if (campo?.hasError('required')) {
      return 'El campo Raza es requerido';
    }
    return '';
  }
  obtenerErrorCampoAlimentacion() {
    var campo = this.form.get('alimentacionId');
    if (campo?.hasError('required')) {
      return 'El campo Alimentación es requerido';
    }
    return '';
  }
  obtenerErrorCampoCliente() {
    var campo = this.form.get('clienteId');
    if (campo?.hasError('required')) {
      return 'El campo Cliente es requerido';
    }
    return '';
  }
  obtenerErrorCampoFechaNacimiento() {
    var campo = this.form.get('fechaNacimiento');
    if (campo?.hasError('required')) {
      return 'El campo Fecha Nacimiento es requerido';
    }
    return '';
  }
  obtenerErrorCampoPeso() {
    var campo = this.form.get('peso');
    if (campo?.hasError('required')) {
      return 'El campo Peso es requerido';
    }
    return '';
  }

  cargarRazas() {
    this.razaService.obtenerTodos().subscribe((respuesta) => {
      this.razas = respuesta;
    });
  }
  cargarAlimentacion() {
    this.alimentacionService.obtenerTodos().subscribe((respuesta) => {
      this.alimentacion = respuesta;
    });
  }
  cargarClientes() {
    this.clientesService.obtenerTodos().subscribe((respuesta) => {
      this.clientes = respuesta;
    });
  }
}
