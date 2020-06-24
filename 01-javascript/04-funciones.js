//funciones
function soloNumeros(a,b,c) {
    return a - b + c;//valor a devolver
}

function soloLetras(a,b,c) { //undefined
    console.log(a,b,c);
}


// soloNumeros('v',true, [1,2,3]);
soloNumeros('v',true,[1,2,3]);
soloNumeros();
soloNumeros(1,2,3,4,5,6,78,9);
soloLetras();

//Funciones nombradas
function funcionNombrada() {};
funcionNombrada();
const funcionNombradaDos = function () {};//funciones anonimas
var funcionNombradaTres = function () {}; //funcion sin nombre
let funcionNombradaCuatro = function opcional() {};//funciones anonimas
funcionNombradaDos();
funcionNombradaTres();
funcionNombradaTres();
//opcional() No existo

const funcionNombradaCindo=()=>{
};//fat Arrow Functions
const funcionNombradaSeis=(x)=>{
    return x + 1;
}; //fat Arrow Functions
const funcionNombradaSiete=(x)=>x+1; //fat Arrow Functions
                                    //una sola linea
                                    //omito REturn
                                    //omito llaves
const funcionNombradaSiete = x=>x+1; //tengo solo un parametro
                                    //omito los parentesis
const funcionNombradaSiete =(x,y,z)=> x + y +z ; //tengo solo un parametro
                                                //omito parentesis
function sumarNumeros(numeroInicial,//1
                      ...otrosNumeros) {//Parametros inf[2,3,4,5,...]
    numeroInicial//1
    //otrosNumeros
    //return numeroInicial + otrosNumeros.reduces((a,v))=> a +v,0);
}

sumarNumeros(1,2,3,4,5,6,7,8,9,10);