const fs = require('fs');

function promesaLeer(path) {
    const miPromesa = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        reject('Error promesa', error);
                    } else {
                        resolve(contenidoLeido);
                    }
                }
            );
        }
    )
    return miPromesa
}

promesaLeer('./06-ejemplo.txt')
    .then(
        (contenido)=>{
            console.log('Contenido then', contenido);
            promesaEscribir('./06-ejemplo.txt','Hola Mundo')
                .then(
                    (contenido)=>{
                        console.log('Contenido nuevo', contenido);
                    }
                )
                .catch(
                    (error)=>{
                        console.log('Contenido catch',error);
                    }
                )
        }
    )
    .catch(
        (error)=>{
            console.log('Contenido catch',error);
        }
    )

function promesaEscribir(path,contenidoNuevo) {
    const miPromesa2 = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject('No es par =(', error);
                    } else {
                        fs.writeFile(
                            path,contenido +'\n'+ contenidoNuevo,'utf-8',
                            (error)=>{
                                if(error){
                                    reject('No es par =(', error);
                                }
                                resolve(contenidoNuevo);
                            });
                    }
                }
            );
        }
    )
    return miPromesa2
}