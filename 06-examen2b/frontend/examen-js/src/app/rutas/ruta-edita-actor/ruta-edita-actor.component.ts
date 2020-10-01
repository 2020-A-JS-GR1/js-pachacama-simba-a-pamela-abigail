import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ActorService} from "../../servicios/http/actor.service";

@Component({
  selector: 'app-ruta-edita-actor',
  templateUrl: './ruta-edita-actor.component.html',
  styleUrls: ['./ruta-edita-actor.component.css']
})
export class RutaEditaActorComponent implements OnInit {

  nota;

  mostrarFormulario = false;

  constructor(//inyectamos dependencias
    private readonly _cursoService: ActorService,
    private readonly _activateRouter: ActivatedRoute,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    const obsRuta = this._activateRouter.params;
    obsRuta
      .subscribe(
        (parametros: Params) => {//try
          const id = Number(parametros.id);
          const obsCurso = this._cursoService.obtenerUnoPorId(id);
          obsCurso
            .subscribe(
              (nota: any) => {
                this.nota = nota;
                this.llenarFormularioConDatosDeNota()
              },
              (error) => {
                console.error('Error', error);
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeNota() {
    this.mostrarFormulario = true;
  }

  editarNotas(notas) {
    const obsEditarUsuario = this._cursoService.editar(notas, this.nota.id);
    obsEditarUsuario
      .subscribe(
        (datos: Object) => {
          const url = ['/pelicula','actor', 'listaac'];
          this._router.navigate(url);

        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

}
