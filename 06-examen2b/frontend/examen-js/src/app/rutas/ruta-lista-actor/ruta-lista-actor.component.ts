import { Component, OnInit } from '@angular/core';
import {PeliculaService} from "../../servicios/http/pelicula.service";
import {Router} from "@angular/router";
import {ActorService} from "../../servicios/http/actor.service";

@Component({
  selector: 'app-ruta-lista-actor',
  templateUrl: './ruta-lista-actor.component.html',
  styleUrls: ['./ruta-lista-actor.component.css']
})
export class RutaListaActorComponent implements OnInit {

  arregloActor = [];
  busquedaModelo='';

  constructor( //inyecta dependencias
    private readonly _actorService: ActorService,
    private readonly  _router: Router,
    private readonly _peliculaService: PeliculaService
  ) {

  }

  irAEditarActor(id: number){
    const ruta =['/pelicula','actor','editarac',id]
    // /usuario/editar/1
    this._router.navigate(ruta);
  }

  eliminarActor(id:number){
    const obsEliminar = this._actorService
      .eliminar(id);
    obsEliminar
      .subscribe(
        ()=>{
          //borrar de la interfaz
          const indice = this.arregloActor
            .findIndex(u=> u.id===id);
          this.arregloActor.splice(indice,1);
        },
        (error)=>{
          console.error('Error',error);
        }
      )
  }

  filtrarArreglo(){
    console.log(this._peliculaService.peliculaid)
    const id = String(this._peliculaService.peliculaid);
    if(this.busquedaModelo != ''){
      const consulta =
        {
          nombreactor:{
            contains: this.busquedaModelo
          },
          pelicula: this._peliculaService.peliculaid

        }
      const consultaString = 'where=' + JSON.stringify(consulta);
      const onservableTraerTodos = this._actorService.traerTodos( consultaString);
      onservableTraerTodos
        .subscribe(
          (usuarios: any[])=>{
            this.arregloActor = usuarios;
          },
          (error)=>{
            console.error('Error',error);
          }
        )
    }else{
      this.traeractores()
    }
  }

  traeractores(){
    const onservableTraerTodos = this._actorService.traerTodosActores(Number(this._peliculaService.peliculaid));
    onservableTraerTodos
      .subscribe(
        (usuarios: any[])=>{
          this.arregloActor = usuarios;
          this._actorService.esactor = true;

        },
        (error)=>{
          console.error('Error',error);
        }
      )

  }

  ngOnInit(): void {
    this.traeractores()
  }

}
