// Arreglos en JS
// const arreglo = new Array(100);
const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(5);
// arreglo.push(8);
// arreglo.push(3);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(numero => numero * 2);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
