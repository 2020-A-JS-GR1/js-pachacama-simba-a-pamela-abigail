import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaPeliculaComponent } from './rutas/ruta-pelicula/ruta-pelicula.component';
import { RutaListaPeliculaComponent } from './rutas/ruta-lista-pelicula/ruta-lista-pelicula.component';
import { RutaListaActorComponent } from './rutas/ruta-lista-actor/ruta-lista-actor.component';
import { RutaActorComponent } from './rutas/ruta-actor/ruta-actor.component';
import { RutaEditaActorComponent } from './rutas/ruta-edita-actor/ruta-edita-actor.component';
import { RutaEditarPeliculaComponent } from './rutas/ruta-editar-pelicula/ruta-editar-pelicula.component';
import { FormularioPeliculaComponent } from './componentes/formulario-pelicula/formulario-pelicula.component';
import { FormularioActorComponent } from './componentes/formulario-actor/formulario-actor.component';
import { RutaCrearPeliculaComponent } from './rutas/ruta-crear-pelicula/ruta-crear-pelicula.component';
import { RutaCrearActorComponent } from './rutas/ruta-crear-actor/ruta-crear-actor.component';
import {PeliculaService} from "./servicios/http/pelicula.service";
import {ActorService} from "./servicios/http/actor.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    RutaPeliculaComponent,
    RutaListaPeliculaComponent,
    RutaListaActorComponent,
    RutaActorComponent,
    RutaEditaActorComponent,
    RutaEditarPeliculaComponent,
    FormularioPeliculaComponent,
    FormularioActorComponent,
    RutaCrearPeliculaComponent,
    RutaCrearActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //importa el HttpClient
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    PeliculaService,
    ActorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
