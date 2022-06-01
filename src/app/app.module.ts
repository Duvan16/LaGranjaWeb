import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearAlimentacionComponent } from './alimentacion/crear-alimentacion/crear-alimentacion.component';
import { EditarAlimentacionComponent } from './alimentacion/editar-alimentacion/editar-alimentacion.component';
import { FormularioAlimentacionComponent } from './alimentacion/formulario-alimentacion/formulario-alimentacion.component';
import { IndiceAlimentacionComponent } from './alimentacion/indice-alimentacion/indice-alimentacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SeguridadInterceptorService } from './Seguridad/seguridad-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { MenuComponent } from './menu/menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { AutorizadoComponent } from './Seguridad/autorizado/autorizado.component';
import { CrearRazaComponent } from './razas/crear-raza/crear-raza.component';
import { EditarRazaComponent } from './razas/editar-raza/editar-raza.component';
import { FormularioRazaComponent } from './razas/formulario-raza/formulario-raza.component';
import { IndiceRazaComponent } from './razas/indice-raza/indice-raza.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { FormularioClienteComponent } from './clientes/formulario-cliente/formulario-cliente.component';
import { IndiceClienteComponent } from './clientes/indice-cliente/indice-cliente.component';
import { IndicePorcinosComponent } from './porcinos/indice-porcinos/indice-porcinos.component';
import { CrearPorcinosComponent } from './porcinos/crear-porcinos/crear-porcinos.component';
import { EditarPorcinosComponent } from './porcinos/editar-porcinos/editar-porcinos.component';
import { FormularioPorcinosComponent } from './porcinos/formulario-porcinos/formulario-porcinos.component';
import { FiltroPorcinosComponent } from './porcinos/filtro-porcinos/filtro-porcinos.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAlimentacionComponent,
    EditarAlimentacionComponent,
    FormularioAlimentacionComponent,
    IndiceAlimentacionComponent,
    MostrarErroresComponent,
    ListadoGenericoComponent,
    MenuComponent,
    AutorizadoComponent,
    LandingPageComponent,
    CrearRazaComponent,
    EditarRazaComponent,
    FormularioRazaComponent,
    IndiceRazaComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    FormularioClienteComponent,
    IndiceClienteComponent,
    IndicePorcinosComponent,
    CrearPorcinosComponent,
    EditarPorcinosComponent,
    FormularioPorcinosComponent,
    FiltroPorcinosComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SeguridadInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
