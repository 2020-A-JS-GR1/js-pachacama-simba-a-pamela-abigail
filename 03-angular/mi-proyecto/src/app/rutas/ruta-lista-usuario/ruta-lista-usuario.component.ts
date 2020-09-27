import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/htttp/usuario.service";
import {observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  arregloUsuarios = [];
  busquedaModelo='';

  constructor( //inyecta dependencias
    private readonly _usuarioService: UsuarioService,
    private readonly  _router: Router
  ) {

  }

  irAEditarUsuario(id: number){
    const ruta =['/usuario','editar',id]
    // /usuario/editar/1
    this._router.navigate(ruta);
  }

  eliminarUsuario(id:number){
    const obsEliminar = this._usuarioService
      .eliminar(id);
    obsEliminar
      .subscribe(
        ()=>{
          //borrar de la interfaz
          const indice = this.arregloUsuarios
            .findIndex(u=> u.id===id);
          this.arregloUsuarios.splice(indice,1);
        },
        (error)=>{
          console.error('Error',error);
        }
      )
  }

  filtrarArreglo(){
    const consulta = {
     or: [
       {
         nombre:{
           contains: this.busquedaModelo
         }
       },
       {
         cedula:{
           contains: this.busquedaModelo
         }
       }
     ]
    }
    const consultaString = 'where=' + JSON.stringify(consulta);

    const onservableTraerTodos = this._usuarioService.traerTodos(this.busquedaModelo != '' ? consultaString: '');
    onservableTraerTodos
      .subscribe(
        (usuarios: any[])=>{
          this.arregloUsuarios = usuarios;
        },
        (error)=>{
          console.error('Error',error);
        }
      )
  }

  ngOnInit(): void {
    this.filtrarArreglo();
  }

}
