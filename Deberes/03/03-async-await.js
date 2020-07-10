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

function promesaEscribir(path,contenidoActual, contenidoNuevo) {
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

async function ejercicio(path, nuevoContenido) {
    try{
        const contenidoArchivoActual = await promesaLeer(path);
        console.log(contenidoArchivoActual)
        await promesaEscribir(path,contenidoArchivoActual,nuevoContenido);
        const nuevoContenidoLectura = await promesaLeer(path);
        console.log('Contenido actual\n',nuevoContenidoLectura);
    }catch (error) {
        console.error(error);
    }

}
const respuestaEjercicio = ejercicio('./deber3.txt', 'Deber cumplido3');