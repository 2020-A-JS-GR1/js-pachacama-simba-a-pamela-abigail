import{Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class UsuarioService {
  url='http://localhost:1337'
  //constructor
  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(){
  return this._httpClient.get(this.url+'/Usuario')
  }

  //Post /Usuario
  crear(usuario){
    return this._httpClient.post(
      this.url + '/Usuario',
      usuario
    )
  }

}
