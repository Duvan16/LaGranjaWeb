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

@NgModule({
  declarations: [
    AppComponent,
    CrearAlimentacionComponent,
    EditarAlimentacionComponent,
    FormularioAlimentacionComponent,
    IndiceAlimentacionComponent,
    MostrarErroresComponent,
    ListadoGenericoComponent,
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
