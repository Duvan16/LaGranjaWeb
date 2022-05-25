import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { razaCreacionDTO, razaDTO } from '../razas';
import { RazasService } from '../razas.service';

@Component({
  selector: 'app-editar-raza',
  templateUrl: './editar-raza.component.html',
  styleUrls: ['./editar-raza.component.css'],
})
export class EditarRazaComponent implements OnInit {
  constructor(
    private router: Router,
    private razaService: RazasService,
    private activatedRoute: ActivatedRoute
  ) {}

  modelo?: razaDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.razaService.obtenerPorId(params['id']).subscribe(
        (raza) => {
          this.modelo = raza;
        },
        () => this.router.navigate(['/razas'])
      );
    });
  }

  guardarCambios(raza: razaCreacionDTO) {
    if (this.modelo) {
      this.razaService.editar(this.modelo.id, raza).subscribe(
        () => {
          this.router.navigate(['/razas']);
        },
        (error) => (this.errores = parsearErroresAPI(error))
      );
    }
  }
}
