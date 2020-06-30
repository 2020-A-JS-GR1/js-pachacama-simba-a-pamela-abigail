const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimeraPromesa = new Promise(
        (resolve, reject) => {
            if(numero % 2 == 0){
                resolve(numero);
            } else {
                reject('No es par =(');
            }
        }
    )
    return miPrimeraPromesa
}

promesaEsPar(2)
    .then(
        (contenido)=>{
            console.log('Contenido then', contenido);
        }
    )
    .catch(
        (error)=>{
            console.log('Contenido catch',error);
        }
    )

function promesaElevadoAlCuadrado(numero) {
    const miPrimeraPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero,2);
            resolve( numeroElevadoAlCuadrado);
        }
    );
    return miPrimeraPromesa
}
promesaEsPar(2)
    .then(
        (numeroPar)=>{
            console.log('Contenido then', numeroPar);
            /*
            NO HACER ESTO
            promesaEsPar(2)
                .then( // try
                    (contenido) => {
                        console.log('Contenido then', contenido);
                    }
                )
                .catch( // catch
                    (error) => {
                        console.error('Contenido catch', error);
                    }
                )
            */
            return promesaElevadoAlCuadrado(numeroPar);
        }
    )
    .then(
        (numeroParAlCuadrado)=>{
            console.log('Numero par al cuadrado: ', numeroParAlCuadrado)
        }
        )
    .catch(
        (error)=>{
            console.log('Contenido catch',error);
        }
    )