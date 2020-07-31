const fs = require('fs');
/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido 
del archivo. Esta funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo
 */
const archivo = './06-ejemplo.txt';
function escribirArchivo(path,contenidoNuevo){

    //fs.readFile(path, codificacion,callback(error,contenido));
    //fs.writeFile(path,contenido,codificacion,callback(error));
    fs.readFile( //asincrona
        path,
        'utf-8',
        (error,contenido)=>{ // callback
            if(error){
                console.error('Hubo error', error);
            } else{
                console.log(contenido);
                fs.writeFile(
                    path,contenido +'\n'+ contenidoNuevo,'utf-8',
                    (error)=>{
                        if(error){
                            console.error('Hubo error', error);
                        }
                        console.log(contenidoNuevo);
                    });
            }
        }
        );
}



escribirArchivo(archivo,'Buenas tardes');

/*
function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (error, contenidoLeido) => {
            if (error) {
                console.error('Error leyendo archivo', error);
            } else {
                fs.writeFile(
                    path,
                    contenidoNuevo + '\n' + contenidoLeido,
                    'utf-8',
                    (error) => {
                        if(error){
                            console.error('Error leyendo archivo', error);
                        }else{
                            console.log('Operacion terminada con exito')
                        }
                    });
            }
        }
    );
}
escribirArchivo(
    './06-ejemplo.txt',
    'Buenas tardes'
);
/*
function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (error, contenidoLeido) => {
            if (error) {
                console.error('Error leyendo archivo', error);
            } else {
                escribirArchivo(path, contenidoNuevo, contenidoLeido)
            }
        }
    );
    // fs.writeFile(path, contenido, codificacion, callback(error));
}
function escribirArchivo(path, contenidoNuevo, contenidoLeido) {
    fs.writeFile(
        path,
        contenidoNuevo + '\n' + contenidoLeido,
        'utf-8',
        (error) => {
            if (error) {
                console.error('Error leyendo archivo', error);
            } else {
                console.log('Operacion terminada con exito')
            }
        });
}
*/

// escribirArchivo('..','Buenas tardes');
