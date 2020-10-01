import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PeliculaService} from "../../servicios/http/pelicula.service";

@Component({
  selector: 'app-ruta-editar-pelicula',
  templateUrl: './ruta-editar-pelicula.component.html',
  styleUrls: ['./ruta-editar-pelicula.component.css']
})
export class RutaEditarPeliculaComponent implements OnInit {

  nota;

  mostrarFormulario = false;

  constructor(//inyectamos dependencias
    private readonly _cursoService: PeliculaService,
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
          const url = ['/pelicula', 'lista'];
          this._router.navigate(url);

        },
        (error) => {
          console.error('Error', error);
        }
      )
  }
}
