import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlimentacionComponent } from './alimentacion/crear-alimentacion/crear-alimentacion.component';
import { EditarAlimentacionComponent } from './alimentacion/editar-alimentacion/editar-alimentacion.component';
import { IndiceAlimentacionComponent } from './alimentacion/indice-alimentacion/indice-alimentacion.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'alimentos',
    component: IndiceAlimentacionComponent,
    // canActivate: [EsAdminGuard],
  },
  {
    path: 'alimentos/crear',
    component: CrearAlimentacionComponent,
    // canActivate: [EsAdminGuard],
  },
  {
    path: 'alimentos/editar/:id',
    component: EditarAlimentacionComponent,
    // canActivate: [EsAdminGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
