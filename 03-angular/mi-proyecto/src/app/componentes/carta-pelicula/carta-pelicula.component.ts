import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  @Output()
  eventoDioclicBoton:EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  eventoDioclicImagen:EventEmitter<boolean> = new EventEmitter<boolean>()

  textoEjemplo = 'Pamela';
  urlEjemploImagen='https://es.web.img3.acsta.net/pictures/18/03/16/15/33/3988420.jpg';
  linkTextoEjemplo='https://www.google.com.ec/';

  constructor() { }

  ngOnInit(): void {
  }
  ejemploFuncion(){
    alert('Hola!');
  }
  eventoOnBlur(){
    console.log('Blur')
  }
  ejecutarEventoDioClic(){
    this.eventoDioclicBoton.emit(true)
  }
  ejecutarEventoDioClicImagen(){
    this.eventoDioclicImagen.emit(true)
  }
}
