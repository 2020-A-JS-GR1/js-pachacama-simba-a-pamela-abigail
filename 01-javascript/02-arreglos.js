const arreglo = [2,1,4,3,5,6,7,8,9,10];
//arreglo =1;
/*let cualquierCosa="ASD";
cualquierCosa = 1;
cualquierCosa= true;
cualquierCosa =  undefined;
cualquierCosa= null;
cualquierCosa = {};
cualquierCosa= [];
console.log(cualquierCosa);*/
const arregloTodo=[
    true,1,1.2,undefined,null,{},[1,2,true,"A"]
];

let a=[1,2,3];
const b = Object.assign([],a);

// for of

for (let numero of arreglo){ //valores
    console.log('numero',numero);
}
// for in
for (let numero in arreglo){ //indice
    console.log('numero',numero);
}

// const arreglo = [6,7,8,9,10];
arreglo.push(11);
//console.log(arreglo)
//const arreglo = [6,7,8,9,10,11];
arreglo.pop();
//console.log(arreglo)
//const arreglo = [5,6,7,8,9,10,11];
arreglo.unshift(5); //Anadir al principio del arreglo
//console.log(arreglo)
arreglo.splice(0,1);
//console.log(arreglo)
arreglo.splice(0,0,3,4,5);
const indice = arreglo.indexOf(9);
console.log('indice',indice);
arreglo.splice(indice,1);
console.log(arreglo);