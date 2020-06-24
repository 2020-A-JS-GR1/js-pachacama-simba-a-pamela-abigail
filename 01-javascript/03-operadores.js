const arreglo = [
    {
        id:1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];
//Funciones como parametros
//FIND
// devolver una expresion -> truty falsy
const respuestaFind = arreglo
    .find(
        function (valorActual,indiceActual,arregloCompleto) {
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaFind', respuestaFind); //undefined

//FINDINDEX
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual,indiceActual,arregloCompleto) {
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex); //undefined

//Foreach

const respuestaForEach = arreglo
    .forEach(
        function (valorActual,indiceActual,arregloCompleto) {
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
        }
    );
console.log('respuestaForEach', respuestaForEach); //undefined

//MAP
//devolver NUEVO ELEMENTO
const respuestaMap = arreglo
    .map(
        (valorActual,indiceActual,arregloCompleto)=> {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap', respuestaMap); //undefined

const respuestaMapNuevo = arreglo
    .map(
        //Funcion anonima -> no tiene nombre
        //funcion de flecha gorda
         (valorActual,indiceActual,arregloCompleto)=> {
            return valorActual.nota;
        }
    );
console.log('respuestaMapNuevo', respuestaMapNuevo); //undefined
console.log('arreglo',arreglo)

//Filter
//devolver expresion truty falsy
const respuestaFilter = arreglo
    .filter(
        (valorActual,indiceActual,arregloCompleto)=>{
            return valorActual.nota >= 14;
        }
    )
console.log('respuestaFilter', respuestaFilter); //undefined
console.log('arreglo',arreglo)


//some -> expresion
//devuelve booleano
//hay alguna nota menor a nueve Si o NO
//OR

const respuestaSome= arreglo
    .some(
        (valorActual, indiceActual, arregloCompleto) =>{
            return valorActual.nota <9;
        }
        );
console.log('respuestaSome', respuestaSome);

//every -> expresion
//devuelve booleano
//todas las notas  son mayor a 14 Si o NO
//AND

const respuestaEvery= arreglo
    .every(
        (valorActual, indiceActual, arregloCompleto) =>{
            return valorActual.nota >14;
        }
    );
console.log('respuestaEvery', respuestaEvery);

//[1,2,3,4,5,6,4,3,1]
//reduce izq -> der
// reduceRight der -> izq

const respuestaReduce=arreglo
    .reduce(
        (valorAcumulado,valorActual,indice,arreglo)=>{
            return valorAcumulada +valorActual.nota;
        },
        500//Acumulador
    );
console.log('respuestaReduce', respuestaReduce);

const resultadoEstudiantesMenoresNueve= arreglo
    .map((v)=>v.nota * 1.3)//añadiendo el 30%
    .filter((nota)=> nota<9)//busco los <9
const totalPuntosEstudiantes =  resultadoEstudiantesMenoresNueve
    .reduce((acumulador,actual)=> acumulador + actual, 0); //total 6,5
const notaPromedio=totalPuntosEstudiantes/resultadoEstudiantesMenoresNueve.length;
