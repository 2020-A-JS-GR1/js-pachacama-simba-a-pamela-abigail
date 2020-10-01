import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PeliculaService} from "../../servicios/http/pelicula.service";

@Component({
  selector: 'app-ruta-crear-pelicula',
  templateUrl: './ruta-crear-pelicula.component.html',
  styleUrls: ['./ruta-crear-pelicula.component.css']
})
export class RutaCrearPeliculaComponent implements OnInit {

  constructor(
    private readonly _usuarioService : PeliculaService,
    private readonly  _router: Router,
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(usuario){
    const obsCrear = this._usuarioService.crear(usuario)
    obsCrear
      .subscribe(
        (datos: Object)=>{

            const url = ['/pelicula','lista']
            this._router.navigate(url);

        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }


}
