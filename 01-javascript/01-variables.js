//tipos de variables
//mutables e inmutables
//
//mutables
var numeroUno = 1;
let numeroDos =  2;

numeroUno = 5;
numeroDos = 8;

numeroUno = false;
numeroDos = true;

// inmutables
const configuracionArchivo ="PDF";
//configuracionArchivo = "XML";

// tipos de variables

const numero =1; //number
const sueldo = 1.2; //number
const texto = "Pamela"; // string
const booleanoo = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
//const apellido = 'Pachacama'; //

console.log(typeof numero);
console.log(typeof sueldo)
console.log(typeof texto)
console.log(typeof booleanoo);
console.log(typeof hijos);
console.log(typeof zapatos);
//console.log(typeof apellido)
console.log(Number("asd"));

if(true == true){
    console.log("es verdadero");
} else{
    console.log("es falso")
}

if(true == false){
    console.log("es verdadero");
} else{
    console.log("es falso")
}

if(""){
    console.log("es verdadero");
} else{
    console.log("es falsy")
}

if("Pamela"){
    console.log("es truty");
} else{
    console.log("es falso")
}

if(-1){
    console.log("es truty");
} else{
    console.log("es falso") //truty
}

if(0){
    console.log("es truty"); //falsy
} else{
    console.log("es falsy")
}

if(1){
    console.log("es truty");
} else{
    console.log("es falsy") //truty
}

if(null){
    console.log("es truty");
} else{
    console.log("es falso") //falsy
}

if(undefined){
    console.log("es truty");
} else{
    console.log("es falso") //falsy
}

//orden de importancia
//1) const
//2) let
//3) X-> "var" nunca

// objetos Js (JSON) - Arreglos

const pamela = {
    nombre: "Pamela", //lleva: valor,
    "apellido":'Pachacama',
    edad: 24,
    hijos: null,
    zapatos:undefined,
    casado: false,
    ropa:{
        color: 'rojo',
        talla:40
    },
    mascotas:['cachetes','pequitas','panda'],
}; // object
pamela.nombre;//"Pamela"
pamela.apellido;//'Pachacama

const arregloNumeros = []; //object

console.log(pamela);
console.log(arregloNumeros);





