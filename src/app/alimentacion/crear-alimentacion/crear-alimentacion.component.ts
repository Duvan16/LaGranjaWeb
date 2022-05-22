import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { alimentacionCreacionDTO, alimentacionDTO } from '../alimentacion';
import { AlimentacionService } from '../alimentacion.service';

@Component({
  selector: 'app-crear-alimentacion',
  templateUrl: './crear-alimentacion.component.html',
  styleUrls: ['./crear-alimentacion.component.css'],
})
export class CrearAlimentacionComponent {
  errores: string[] = [];

  constructor(
    private router: Router,
    private alimentacionService: AlimentacionService
  ) {}

  guardarCambios(alimentacion: alimentacionCreacionDTO) {
    this.alimentacionService.crear(alimentacion).subscribe(
      () => {
        this.router.navigate(['/alimentacion']);
      },
      (error: any) => (this.errores = parsearErroresAPI(error))
    );
  }
}
