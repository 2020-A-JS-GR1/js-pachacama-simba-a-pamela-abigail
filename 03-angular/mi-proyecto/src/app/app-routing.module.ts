import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";

const routes: Routes = [
  {
    component: RutaInicioComponent,
    path:'inicio'
  },
  {
    component: RutaLoginComponent,
    path:'login'
  },
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
