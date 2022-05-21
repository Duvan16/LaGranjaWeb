import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { alimentacionCreacionDTO, alimentacionDTO } from '../alimentacion';
import { AlimentacionService } from '../alimentacion.service';

@Component({
  selector: 'app-editar-alimentacion',
  templateUrl: './editar-alimentacion.component.html',
  styleUrls: ['./editar-alimentacion.component.css'],
})
export class EditarAlimentacionComponent implements OnInit {
  constructor(
    private router: Router,
    private alimentacionService: AlimentacionService,
    private activatedRoute: ActivatedRoute
  ) {}

  modelo?: alimentacionDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.alimentacionService.obtenerPorId(params['id']).subscribe(
        (genero) => {
          console.log(genero);
          this.modelo = genero;
        },
        () => this.router.navigate(['/alimentacion'])
      );
    });
  }

  guardarCambios(genero: alimentacionCreacionDTO) {
    if (this.modelo) {
      this.alimentacionService.editar(this.modelo.id, genero).subscribe(
        () => {
          this.router.navigate(['/alimentacion']);
        },
        (error) => (this.errores = parsearErroresAPI(error))
      );
    }
  }
}
