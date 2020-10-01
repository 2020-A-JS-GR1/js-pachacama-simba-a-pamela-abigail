import { Component, OnInit } from '@angular/core';
import {PeliculaService} from "../../servicios/http/pelicula.service";
import {Router} from "@angular/router";
import {ActorService} from "../../servicios/http/actor.service";

@Component({
  selector: 'app-ruta-lista-pelicula',
  templateUrl: './ruta-lista-pelicula.component.html',
  styleUrls: ['./ruta-lista-pelicula.component.css']
})
export class RutaListaPeliculaComponent implements OnInit {

  arregloPeliculas = [];
  arregloHijos = [];
  busquedaModelo='';

  constructor( //inyecta dependencias
    private readonly _peliculaService: PeliculaService,
    private readonly  _router: Router,
    private readonly  _actorService: ActorService
  ) {

  }

  irAEditarPelicula(id: number){
    const ruta =['/pelicula','editar',id]
    // /usuario/editar/1
    this._router.navigate(ruta);
  }

  eliminarPelicula(id:number){
    const obsEliminar = this._peliculaService
      .eliminar(id);
    obsEliminar
      .subscribe(
        ()=>{
          //borrar de la interfaz
          const indice = this.arregloPeliculas
            .findIndex(u=> u.id===id);
          this.arregloPeliculas.splice(indice,1);
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
          categoria:{
            contains: this.busquedaModelo
          }
        }
      ]
    }
    const consultaString = 'where=' + JSON.stringify(consulta);

    const onservableTraerTodos = this._peliculaService.traerTodos(
      this.busquedaModelo != '' ? consultaString: '');
    onservableTraerTodos
      .subscribe(
        (usuarios: any[])=>{
          this.arregloPeliculas = usuarios;
          this._peliculaService.espelicula= true;
          this._actorService.esactor= false;
        },
        (error)=>{
          console.error('Error',error);
        }
      )
  }


  ngOnInit(): void {
    this.filtrarArreglo();
  }

  irAListaActores(id: number) {
   this._peliculaService.peliculaid = String(id);
    const ruta =['/pelicula','actor']
    // /usuario/editar/1
    this._router.navigate(ruta);
  }
}

