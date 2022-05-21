import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearAlimentacionComponent } from './alimentacion/crear-alimentacion/crear-alimentacion.component';
import { EditarAlimentacionComponent } from './alimentacion/editar-alimentacion/editar-alimentacion.component';
import { FormularioAlimentacionComponent } from './alimentacion/formulario-alimentacion/formulario-alimentacion.component';
import { IndiceAlimentacionComponent } from './alimentacion/indice-alimentacion/indice-alimentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAlimentacionComponent,
    EditarAlimentacionComponent,
    FormularioAlimentacionComponent,
    IndiceAlimentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
