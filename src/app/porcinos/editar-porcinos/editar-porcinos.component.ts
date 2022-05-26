import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { porcinoCreacionDTO, porcinoDTO } from '../porcinos';
import { PorcinosService } from '../porcinos.service';

@Component({
  selector: 'app-editar-porcinos',
  templateUrl: './editar-porcinos.component.html',
  styleUrls: ['./editar-porcinos.component.css'],
})
export class EditarPorcinosComponent implements OnInit {
  constructor(
    private router: Router,
    private porcinoService: PorcinosService,
    private activatedRoute: ActivatedRoute
  ) {}

  modelo?: porcinoDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.porcinoService.obtenerPorId(params['id']).subscribe(
        (porcino) => {
          this.modelo = porcino;
        },
        () => this.router.navigate(['/porcinos'])
      );
    });
  }

  guardarCambios(porcino: porcinoCreacionDTO) {
    if (this.modelo) {
      this.porcinoService.editar(this.modelo.id, porcino).subscribe(
        () => {
          this.router.navigate(['/porcinos']);
        },
        (error) => (this.errores = parsearErroresAPI(error))
      );
    }
  }
}
