import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlimentacionComponent } from './alimentacion/crear-alimentacion/crear-alimentacion.component';
import { EditarAlimentacionComponent } from './alimentacion/editar-alimentacion/editar-alimentacion.component';
import { IndiceAlimentacionComponent } from './alimentacion/indice-alimentacion/indice-alimentacion.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { IndiceClienteComponent } from './clientes/indice-cliente/indice-cliente.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { CrearRazaComponent } from './razas/crear-raza/crear-raza.component';
import { EditarRazaComponent } from './razas/editar-raza/editar-raza.component';
import { IndiceRazaComponent } from './razas/indice-raza/indice-raza.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'alimentacion',
    component: IndiceAlimentacionComponent,
    // canActivate: [EsAdminGuard],
  },
  {
    path: 'alimentacion/crear',
    component: CrearAlimentacionComponent,
    // canActivate: [EsAdminGuard],
  },
  {
    path: 'alimentacion/editar/:id',
    component: EditarAlimentacionComponent,
    // canActivate: [EsAdminGuard],
  },
  {
    path: 'razas',
    component: IndiceRazaComponent,
  },
  {
    path: 'razas/crear',
    component: CrearRazaComponent,
  },
  {
    path: 'razas/editar/:id',
    component: EditarRazaComponent,
  },
  {
    path: 'clientes',
    component: IndiceClienteComponent,
  },
  {
    path: 'clientes/crear',
    component: CrearClienteComponent,
  },
  {
    path: 'clientes/editar/:id',
    component: EditarClienteComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
