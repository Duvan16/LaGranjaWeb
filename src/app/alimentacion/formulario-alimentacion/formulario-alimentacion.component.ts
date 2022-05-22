import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { alimentacionCreacionDTO, alimentacionDTO } from '../alimentacion';

@Component({
  selector: 'app-formulario-alimentacion',
  templateUrl: './formulario-alimentacion.component.html',
  styleUrls: ['./formulario-alimentacion.component.css'],
})
export class FormularioAlimentacionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  @Input()
  modelo?: alimentacionDTO;

  @Input()
  errores: string[] = [];

  @Output()
  OnSubmit: EventEmitter<alimentacionCreacionDTO> = new EventEmitter<alimentacionCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3)],
        },
      ],
      dosis: [
        '',
        {
          validators: [Validators.required, Validators.min(1)],
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

  obtenerErrorCampoDescripcion() {
    var campo = this.form.get('descripcion');
    if (campo?.hasError('required')) {
      return 'El campo Descripción es requerido';
    }

    if (campo?.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }

    return '';
  }
  obtenerErrorCampoDosis() {
    var campo = this.form.get('dosis');
    if (campo?.hasError('required')) {
      return 'El campo Dosis es requerido';
    }
    if (campo?.hasError('min')) {
      return 'El campo Dosis es requerido';
    }

    return '';
  }
}
