import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { razaCreacionDTO, razaDTO } from '../razas';

@Component({
  selector: 'app-formulario-raza',
  templateUrl: './formulario-raza.component.html',
  styleUrls: ['./formulario-raza.component.css'],
})
export class FormularioRazaComponent {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  @Input()
  modelo?: razaDTO;

  @Input()
  errores: string[] = [];

  @Output()
  OnSubmit: EventEmitter<razaCreacionDTO> = new EventEmitter<razaCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
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

  onSubmit() {
    this.OnSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if (campo?.hasError('required')) {
      return 'El campo Nombre es requerido';
    }

    if (campo?.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }

    return '';
  }
}
