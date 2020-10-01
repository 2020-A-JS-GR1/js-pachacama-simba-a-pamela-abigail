import { Component, OnInit } from '@angular/core';
import {PeliculaService} from "../../servicios/http/pelicula.service";
import {ActorService} from "../../servicios/http/actor.service";

@Component({
  selector: 'app-ruta-pelicula',
  templateUrl: './ruta-pelicula.component.html',
  styleUrls: ['./ruta-pelicula.component.css']
})
export class RutaPeliculaComponent implements OnInit {

  constructor(
    readonly _peliculaService : PeliculaService,
    readonly _actorService : ActorService
  ) { }

  ngOnInit(): void {
  }

}
