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

const vocales=['a','e','i','o','u','A','E','I','O','U'];
//'A','E','I','O','U'

let sum=0;
let contador = 0;
let contador1 = 0;
const respuestaMap = arreglo
    .map(
        (valorActual,indiceActual,arregloCompleto)=> {
            const nombreaux = valorActual.nombre;

            for( let x of nombreaux ){
                //console.log('a', a);
                for( let y  in vocales ) {
                    // console.log('vocales', y);
                    if( x === vocales[y]){
                        sum= sum+ 0.1;
                        contador= contador+1;
                    }
                }
            }
            contador1=nombreaux.length - contador;

            const nuevoElemento = {
                id: valorActual.id,
                nombre:valorActual.nombre,
                nota: valorActual.nota+sum + (contador1*0.05),
            };
            sum=0;
            contador = 0;
            contador1 = 0;
            return nuevoElemento;

            //contador = 0;
            //contador1 = 0;
        }
    );


const respuestaFilter = respuestaMap
    .filter(
        (valorActual,indiceActual,arregloCompleto)=>{
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaMap', respuestaMap); //undefined
console.log('respuestaFilter', respuestaFilter); //undefined
console.log('arreglo',arreglo)