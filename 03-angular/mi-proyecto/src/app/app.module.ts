import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servicios/htttp/usuario.service";

@NgModule({
  declarations: [//componentes
    AppComponent,
    CartaPeliculaComponent
  ],
  imports: [//modulo
    BrowserModule,//importa el ngfor y el ngif
    AppRoutingModule,
    HttpClientModule,//importa el HttpClient
  ],
  providers: [//servicios
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
