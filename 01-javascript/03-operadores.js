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
