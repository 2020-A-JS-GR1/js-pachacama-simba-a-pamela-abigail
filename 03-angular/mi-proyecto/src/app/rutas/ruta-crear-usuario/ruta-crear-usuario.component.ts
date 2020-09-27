import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/htttp/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-usuario',
  templateUrl: './ruta-crear-usuario.component.html',
  styleUrls: ['./ruta-crear-usuario.component.css']
})
export class RutaCrearUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioService : UsuarioService,
    private readonly  _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(usuario){
    const obsCrear = this._usuarioService.crear(usuario)
    obsCrear
      .subscribe(
        (datos: Object)=>{
          const url = ['/usuario','lista']
          this._router.navigate(url);
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

}
