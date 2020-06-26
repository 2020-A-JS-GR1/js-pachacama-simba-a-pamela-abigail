const fs = require('fs');
console.log('Primero'); //sincrona

fs.readFile( //asincrona
    './06-ejemplo.txt',
    'utf-8',
    (error,contenido)=>{ // callback
        console.log('Segundo');
        if(error){
            console.error('Hubo error', error);
        } else{
            console.log(contenido);
        }
    }
);
const suma =  5 +3;  //sincrona
console.log('suma',suma);//sincrona
console.log('Final');//sincrona