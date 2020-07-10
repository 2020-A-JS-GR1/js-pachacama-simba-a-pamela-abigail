//variables
let nombre: string = 'Pamela';
// nombre = 1;
nombre = 'Pachacama';

// Duck Typing
let edad: number = 31;
let casado: boolean = false;
let fecha: Date = new Date();

/*let edad = 31;
let casado false;
let fecha = new Date();*/

let sueldo: number;
sueldo = 12.4;
/* mala practica
let marihuan:any=2;
marihuan = '2';
marihuan= true;
marihuan = () => '2';*/

let edadMultiple: number | string = 2;
edadMultiple = '2';
edadMultiple=2222;
edadMultiple='dos';

