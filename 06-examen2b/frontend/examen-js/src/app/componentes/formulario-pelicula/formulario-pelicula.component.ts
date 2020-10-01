import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PeliculaService} from "../../servicios/http/pelicula.service";

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  @Input()
  nombreInput:string;

  @Input()
  categoriaInput:string;

  @Input()
  nuevasInput:string;

  @Input()
  ratingInput:string;

  @Input()
  descripcionInput:string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  nota;
  nombreModelo: string;
  categoriaModelo: string;
  nuevasModelo: string;
  ratingModelo: string;
  descripcionModelo: string;


  constructor(
    private readonly  _cursoService: PeliculaService,
    private readonly _activateRouter: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.traerNotas();
    if(this.nombreInput && this.categoriaInput && this.descripcionInput && this.nuevasInput && this.ratingInput ){
      this.nombreModelo = this.nombreInput;
      this.categoriaModelo = this.categoriaInput;
      this.nuevasModelo = this.nuevasInput;
      this.ratingModelo = this.ratingInput;
      this.descripcionModelo= this.descripcionInput;

    }
  }
  crearUsuario(formulario){
    const rating = this.ratingModelo
    const esNumero = !Number.isNaN(Number(rating));

    if(esNumero){
      console.log('Listo =)');
      this.informacionValidada.emit({
        nombre: this.nombreModelo,
        categoria: this.categoriaModelo,
        nuevas:this.nuevasModelo,
        rating: this.ratingModelo,
        descripcion: this.descripcionModelo

      })
    }else{
      console.error('No es numero')
    }
  }

  traerNotas(){
    const obsRuta = this._activateRouter.params;
    obsRuta
      .subscribe(
        (parametros:Params)=>{//try
          const id= Number(parametros.id);
          const obsCurso = this._cursoService.obtenerUnoPorId(id);
          obsCurso
            .subscribe(
              (nota: any) => {
                this.nota = nota;
              },
              (error) =>{
                console.error('Error', error);
              }
            )
        }
      )
  }


  irAlista() {
    const ruta = ['/pelicula', 'lista']
    // /usuario/editar/1
    this._router.navigate(ruta);
  }
}
