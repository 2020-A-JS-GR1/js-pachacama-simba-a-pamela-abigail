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

async function ejercicio() {
    console.log('1');
    try{
        const contenidoArchivoActual = await promesaLeerArchivo();
        await promesaEscribirArchivo();
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
    }catch (error) {
        console.error(error);
    }

}
const f = async ()=>{

}