import { Component } from '@angular/core';
import {UsuarioService} from "./servicios/htttp/usuario.service";

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';



  arregloPeliculas=[
    {
      id:1,
      url:'https://es.web.img3.acsta.net/pictures/18/03/16/15/33/3988420.jpg',
      descripcion:'pelicula accion',
      nombrePelicula:'Advenger'
    },
    {
      id:2,
      url:'https://i.blogs.es/fa749e/aladdin-2019/450_1000.jpeg',
      descripcion:'pelicula infantil',
      nombrePelicula:'Aladin'
    },
    {
      id:3,
      url:'https://d500.epimg.net/cincodias/imagenes/2018/06/29/smarttv/1530279996_778826_1530280220_noticia_normal.jpg',
      descripcion:'pelicula accion',
      nombrePelicula:'Jumanji'
    }
]
  arregloNumeros=[1,2,3]
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }
  mensajeConsola(objeto:boolean){
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          console.log(data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
  }

}
