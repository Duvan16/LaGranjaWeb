import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clienteCreacionDTO, clienteDTO } from '../clientes';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css'],
})
export class FormularioClienteComponent {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  @Input()
  modelo?: clienteDTO;

  @Input()
  errores: string[] = [];

  @Output()
  OnSubmit: EventEmitter<clienteCreacionDTO> = new EventEmitter<clienteCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cedula: [
        '',
        {
          validators: [Validators.required, Validators.minLength(7)],
        },
      ],
      nombres: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3)],
        },
      ],
      apellidos: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3)],
        },
      ],
      direccion: [
        '',
        {
          validators: [Validators.required, Validators.minLength(5)],
        },
      ],
      telefono: [
        '',
        {
          validators: [Validators.required, Validators.minLength(7)],
        },
      ],
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  onSubmit() {
    this.OnSubmit.emit(this.form.value);
  }
  obtenerErrorCampoCedula() {
    var campo = this.form.get('cedula');
    if (campo?.hasError('required')) {
      return 'El campo Cédula es requerido';
    }

    if (campo?.hasError('minlength')) {
      return 'La longitud mínima es de 7 caracteres';
    }

    return '';
  }

  obtenerErrorCampoNombres() {
    var campo = this.form.get('nombres');
    if (campo?.hasError('required')) {
      return 'El campo Nombres es requerido';
    }

    if (campo?.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }

    return '';
  }
  obtenerErrorCampoApellidos() {
    var campo = this.form.get('apellidos');
    if (campo?.hasError('required')) {
      return 'El campo Apellidos es requerido';
    }

    if (campo?.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }

    return '';
  }
  obtenerErrorCampoDireccion() {
    var campo = this.form.get('direccion');
    if (campo?.hasError('required')) {
      return 'El campo Dirección es requerido';
    }

    if (campo?.hasError('minlength')) {
      return 'La longitud mínima es de 5 caracteres';
    }
    return '';
  }
  obtenerErrorCampoTelefono() {
    var campo = this.form.get('telefono');
    if (campo?.hasError('required')) {
      return 'El campo Teléfono es requerido';
    }

    if (campo?.hasError('minlength')) {
      return 'La longitud mínima es de 7 caracteres';
    }
    return '';
  }
}
