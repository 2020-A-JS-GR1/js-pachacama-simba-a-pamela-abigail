const pame={
    nombre:"Pamela"
};
const carolina={
    apellido:"Eguez"
};

const pameCarolina ={ //se crea una nueva referencias
    ...pame,
    ...carolina,
};
pameCarolina.nombre='Carolina';
console.log('PameCarolina',pameCarolina);
console.log('pame',pame);

const arregloUno = [1,2,3,4,5];
const arregloDos = [1,2,3,4,5];
//6,7,8,9,10
const  superArreglo=[
    ...arregloUno,
    ...arregloDos
];
superArreglo[0]=100;
console.log('superArreglo', superArreglo);
console.log('arregloUno',arregloUno);