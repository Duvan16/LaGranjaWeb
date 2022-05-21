import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { alimentacionCreacionDTO } from '../alimentacion';

@Component({
  selector: 'app-formulario-alimentacion',
  templateUrl: './formulario-alimentacion.component.html',
  styleUrls: ['./formulario-alimentacion.component.css'],
})
export class FormularioAlimentacionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  modelo: alimentacionCreacionDTO = { descripcion: '', dosis: 0 };

  @Output()
  onSubmit: EventEmitter<alimentacionCreacionDTO> = new EventEmitter<alimentacionCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3)],
        },
      ],
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios() {
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoDescripcion() {
    var campo = this.form.get('descripcion');
    if (campo?.hasError('required')) {
      return 'El campo descripcion es requerido';
    }

    if (campo?.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }

    return '';
  }
}
