import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ActorService {
  actor;
  esactor = false;
  url='http://localhost:1337'
  //constructor
  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(consulta?: string){

    return this._httpClient.get(this.url+'/Actor?'+ consulta);
  }
  traerTodosActores( idPelicula: number){

    return this._httpClient.get(this.url+'/Actor?pelicula='+ idPelicula)
  }

  obtenerUnoPorId(idUsuario: number){
    return this._httpClient.get(this.url+'/Actor/'+idUsuario);
  }

  //Post /Usuario
  crear(usuario){
    return this._httpClient.post(
      this.url + '/Actor',
      usuario
    )
  }

  editar(usuario, id){
    return this._httpClient.put(
      this.url + '/Actor/'+ id,
      usuario
    )
  }
  eliminar(idUsuario:number){
    return this._httpClient.delete( this.url + '/Actor/' + idUsuario);

  }


}
