import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaPeliculaComponent} from "./rutas/ruta-pelicula/ruta-pelicula.component";
import {RutaEditarPeliculaComponent} from "./rutas/ruta-editar-pelicula/ruta-editar-pelicula.component";
import {RutaListaPeliculaComponent} from "./rutas/ruta-lista-pelicula/ruta-lista-pelicula.component";
import {RutaCrearPeliculaComponent} from "./rutas/ruta-crear-pelicula/ruta-crear-pelicula.component";
import {RutaActorComponent} from "./rutas/ruta-actor/ruta-actor.component";
import {RutaEditaActorComponent} from "./rutas/ruta-edita-actor/ruta-edita-actor.component";
import {RutaListaActorComponent} from "./rutas/ruta-lista-actor/ruta-lista-actor.component";
import {RutaCrearActorComponent} from "./rutas/ruta-crear-actor/ruta-crear-actor.component";

const routes: Routes = [
  {
    component: RutaPeliculaComponent,
    path:'pelicula',
    children: [
      {
        component: RutaEditarPeliculaComponent,
        path:'editar/:id'
      },
      {
        path:'lista',
        component: RutaListaPeliculaComponent
      },
      {
        path: 'crear',
        component: RutaCrearPeliculaComponent
      },
      {
        path: 'actor',
        component: RutaActorComponent,
        children:[
          {
            component: RutaEditaActorComponent,
            path:'editarac/:id'
          },
          {
            path:'listaac',
            component: RutaListaActorComponent
          },
          {
            path: 'crearac',
            component: RutaCrearActorComponent
          },
          {
            path:'',
            redirectTo:'listaac',
            pathMatch:'full'
          }
        ]
      },
      {
        path:'',
        redirectTo:'/lista',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/pelicula',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
