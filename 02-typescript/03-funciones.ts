//funciones

function sumarNumeros(
    numeroInicial: number,
    ...numerosASumarse: number[]
): number {
    return numeroInicial;
}

sumarNumeros(1,2,3,4,5);

function imprimir(mensaje: string): void {
    console.log('Hola '+ mensaje);
}

const arregloNumeros: number[]=[1,2,3];
const arregloNumeroDos: Array<number>=[1,2,3];
const arregloNumeroTres: (number| string| boolean)[]=[1,"a",true];
const arregloNumeroCuatro: Array<number|string| boolean>=[1,"a",3];
let arregloNumerosOTexto: number[]| string[] = ['1','2'];
arregloNumerosOTexto = [1,2,3];