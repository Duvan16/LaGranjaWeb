import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlimentacionComponent } from './alimentacion/crear-alimentacion/crear-alimentacion.component';
import { EditarAlimentacionComponent } from './alimentacion/editar-alimentacion/editar-alimentacion.component';
import { IndiceAlimentacionComponent } from './alimentacion/indice-alimentacion/indice-alimentacion.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { IndiceClienteComponent } from './clientes/indice-cliente/indice-cliente.component';
import { EsAdminGuard } from './es-admin.guard';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { CrearPorcinosComponent } from './porcinos/crear-porcinos/crear-porcinos.component';
import { EditarPorcinosComponent } from './porcinos/editar-porcinos/editar-porcinos.component';
import { FiltroPorcinosComponent } from './porcinos/filtro-porcinos/filtro-porcinos.component';
import { IndicePorcinosComponent } from './porcinos/indice-porcinos/indice-porcinos.component';
import { CrearRazaComponent } from './razas/crear-raza/crear-raza.component';
import { EditarRazaComponent } from './razas/editar-raza/editar-raza.component';
import { IndiceRazaComponent } from './razas/indice-raza/indice-raza.component';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';

const routes: Routes = [
  { path: '', component: FiltroPorcinosComponent },
  {
    path: 'alimentacion',
    component: IndiceAlimentacionComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'alimentacion/crear',
    component: CrearAlimentacionComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'alimentacion/editar/:id',
    component: EditarAlimentacionComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'razas',
    component: IndiceRazaComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'razas/crear',
    component: CrearRazaComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'razas/editar/:id',
    component: EditarRazaComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'clientes',
    component: IndiceClienteComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'clientes/crear',
    component: CrearClienteComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'clientes/editar/:id',
    component: EditarClienteComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'porcinos',
    component: IndicePorcinosComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'porcinos/crear',
    component: CrearPorcinosComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'porcinos/editar/:id',
    component: EditarPorcinosComponent,
    canActivate: [EsAdminGuard],
  },
  {
    path: 'porcinos/reporte',
    component: FiltroPorcinosComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'usuarios',
    component: IndiceUsuariosComponent,
    canActivate: [EsAdminGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
