import { Component } from '@angular/core';
import {UsuarioService} from "./servicios/htttp/usuario.service";

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
  habilitado=true;


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

  arregloUsuarios=[];
  arregloObservable=[];
  arregloNumeros=[1,2,3]
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }

  ngOnInit(){
    this.mensajeConsola(true);
  }
  mensajeConsola(objeto:boolean){
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    const  suscripcion = observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          this.arregloUsuarios = data as any[];
          console.log(data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
    //this.arregloObservable.push(suscripcion);
    //suscripcion.unsubscribe();
  }

  crearUsuario(){
    const usuarioNuevo={
      cedula:'123456789155',
      nombre:'Naruto',
      apellido: 'Uzumaki'
    }
    const obsCrearUsuario = this._usuarioService
      .crear(usuarioNuevo);
    obsCrearUsuario
      .subscribe(
        (datos:Object)=>{
          console.log('Nuevo Usuario', datos)
          this.mensajeConsola(true);
        },
        (error) =>{
          console.log('Error', error);
        }
      )
  }

}
