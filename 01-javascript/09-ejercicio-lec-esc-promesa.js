const fs = require('fs');

function promesaLeer(path) {
    const miPromesa = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        reject('Error leyendo archivo', error);
                    } else {
                        resolve(contenidoLeido);
                    }
                }
            );
        }
    )
    return miPromesa
}

function ejercicio(path,nuevoContenido){
    promesaLeer(path)
        .then(
            (contenidoActual)=>{
               return promesaEscribir(
                   path, contenidoActual, nuevoContenido
               );
            }
        )
        .then(
            () => promesaLeerArchivo(path)
        )
        .then(
            (nuevoContenido)=>{
                console.log('Nuevo contenido', nuevoContenido)
            }
        )
        .catch(
            (error)=>{
                console.error(error);
            }
        )

}



function promesaEscribir(path,contenigoActual, contenidoNuevo) {
    const miPromesa2 = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,contenidoActual +'\n'+ contenidoNuevo,'utf-8',
                (error)=>{
                    if(error){
                        reject('Error leyendo archivo', error);
                    }else{
                        resolve(contenidoNuevo);
                    }

                });
        }
    );
    return miPromesa2
}

ejercicio('./06-ejemplo.txt', 'Buenas mañanas');