import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { porcinoCreacionDTO } from '../porcinos';
import { PorcinosService } from '../porcinos.service';

@Component({
  selector: 'app-crear-porcinos',
  templateUrl: './crear-porcinos.component.html',
  styleUrls: ['./crear-porcinos.component.css'],
})
export class CrearPorcinosComponent {
  errores: string[] = [];

  constructor(
    private router: Router,
    private porcinoService: PorcinosService
  ) {}

  guardarCambios(porcino: porcinoCreacionDTO) {
    this.porcinoService.crear(porcino).subscribe(
      () => {
        this.router.navigate(['/porcinos']);
      },
      (error: any) => (this.errores = parsearErroresAPI(error))
    );
  }
}
