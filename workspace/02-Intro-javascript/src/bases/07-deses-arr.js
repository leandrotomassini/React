const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, p2, p3] = personajes;

console.log(p2);
console.log(p3);


const retornaArreglo = () => {
    return ['ABC', '123'];
}

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

// Tarea
const nombre = (valor) => {
    return [valor, () => {
        console.log('Hola mundo');
    }];
}


const [nombres, setNombres] = nombre('Goku');
console.log(nombres);
setNombres();

