import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ActorService} from "../../servicios/http/actor.service";

@Component({
  selector: 'app-ruta-crear-actor',
  templateUrl: './ruta-crear-actor.component.html',
  styleUrls: ['./ruta-crear-actor.component.css']
})
export class RutaCrearActorComponent implements OnInit {

  constructor(
    private readonly _usuarioService : ActorService,
    private readonly  _router: Router,
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(usuario){
    const obsCrear = this._usuarioService.crear(usuario)
    obsCrear
      .subscribe(
        (datos: Object)=>{

          const url = ['/pelicula','actor','listaac']
          this._router.navigate(url);

        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

}
