import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PeliculaService} from "../../servicios/http/pelicula.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ActorService} from "../../servicios/http/actor.service";

@Component({
  selector: 'app-formulario-actor',
  templateUrl: './formulario-actor.component.html',
  styleUrls: ['./formulario-actor.component.css']
})
export class FormularioActorComponent implements OnInit {


  @Input()
  nombreacInput:string;

  @Input()
  edadInput:string;

  @Input()
  casadoInput:string;

  @Input()
  oscarInput:string;

  @Input()
  descripcionInput:string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  nota;
  nombreacModelo: string;
  descripcionModelo: string;
  edadModelo: string;
  casadoModelo: string;
  oscarModelo: string;


  constructor(
    private readonly  _actorService: ActorService,
    private readonly _activateRouter: ActivatedRoute,
    private readonly _router: Router,
    private readonly  _peliculaService: PeliculaService,
  ) { }

  ngOnInit(): void {
    this.traerNotas();
    if(this.nombreacInput && this.edadInput && this.descripcionInput && this.casadoInput && this.oscarInput ){
      this.nombreacModelo = this.nombreacInput;
      this.edadModelo = this.edadInput;
      this.casadoModelo = this.casadoInput;
      this.oscarModelo = this.oscarInput;
      this.descripcionModelo= this.descripcionInput;

    }
  }
  crearUsuario(formulario){
    const edad = this.edadModelo;
    const esNumero = !Number.isNaN(Number(edad));
    const oscar = this.oscarModelo
    const esNumeroOsc=!Number.isNaN(Number(oscar))

    if(esNumero && esNumeroOsc){
      console.log('Listo =)');
      this.informacionValidada.emit({
        nombreactor: this.nombreacModelo,
        edad: this.edadModelo,
        casado:this.casadoModelo,
        oscar: this.oscarModelo,
        descripcion: this.descripcionModelo,
        pelicula: this._peliculaService.peliculaid

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
          this._actorService.actor = id
          const obsCurso = this._actorService.obtenerUnoPorId(id);
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
    const ruta = ['/pelicula','actor', 'listaac']
    // /usuario/editar/1
    this._router.navigate(ruta);
  }

}
