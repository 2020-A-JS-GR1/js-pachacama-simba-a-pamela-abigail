import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  nombreModelo:string;
  cedulaModelo: string;
  estadoCivilModelo:string;
  constructor() { }

  ngOnInit(): void {
  }
  crearUsuario(formulario){
    const cedula = this.cedulaModelo
    const esNumero = !Number.isNaN(Number(cedula));
    if(esNumero){
      console.log('Listo =)')
    }else{
      console.error('No es numero')
    }
  }
  ayuda(){
    alert('Ayuda')
  }

}
