const promesaLeerArchivo = new Promise();
const promesaEscribirArchivo = new Promise();

//async await -> dentro de una funcion
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