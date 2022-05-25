import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { razaCreacionDTO } from '../razas';
import { RazasService } from '../razas.service';

@Component({
  selector: 'app-crear-raza',
  templateUrl: './crear-raza.component.html',
  styleUrls: ['./crear-raza.component.css'],
})
export class CrearRazaComponent {
  errores: string[] = [];

  constructor(private router: Router, private razasService: RazasService) {}

  guardarCambios(raza: razaCreacionDTO) {
    this.razasService.crear(raza).subscribe(
      () => {
        this.router.navigate(['/razas']);
      },
      (error: any) => (this.errores = parsearErroresAPI(error))
    );
  }
}
