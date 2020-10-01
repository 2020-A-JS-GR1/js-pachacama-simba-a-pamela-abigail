import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PeliculaService {
  peliculaid='';
  espelicula=false;
  url='http://localhost:1337'
  //constructor
  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(consulta?: string){
    return this._httpClient.get(this.url+'/Pelicula?'+ consulta)
  }

  obtenerUnoPorId(idUsuario: number){
    return this._httpClient.get(this.url+'/Pelicula/'+idUsuario);
  }

  //Post /Usuario
  crear(usuario){
    return this._httpClient.post(
      this.url + '/Pelicula',
      usuario
    )
  }

  editar(usuario, id){
    return this._httpClient.put(
      this.url + '/Pelicula/'+ id,
      usuario
    )
  }
  eliminar(idUsuario:number){
    return this._httpClient.delete( this.url + '/Pelicula/' + idUsuario);

  }


}
