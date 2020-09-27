import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/htttp/usuario.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;
  constructor(//inyectamos dependencias
    private  readonly _usuarioService: UsuarioService,
    private readonly _activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activateRouter.params;
    obsRuta
      .subscribe(
        (parametros:Params)=>{//try
          const id= Number(parametros.id);
          const obsUsuario = this._usuarioService.obtenerUnoPorId(id);
          obsUsuario
            .subscribe(
              (usuario: any) => {
                this.usuario = usuario;
              },
              (error) =>{
                console.error('Error', error);
              }
            )
        }
      )
  }

}
