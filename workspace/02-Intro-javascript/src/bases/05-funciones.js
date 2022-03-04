// Funciones
const saludar = function (nombre) {
    return `Hola, ${nombre}.`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}.`;
}

const saludar3 = (nombre) => `Hola, ${nombre}.`;
const saludar4 = () => `Hola mundo.`;


// console.log(saludar('Leandro'));

console.log(saludar);
console.log(saludar2('Leandro'));
console.log(saludar3('Leandro'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'usuario1'
    }
}

console.log(getUser());


const getUsuarioActivo = (nombre) =>
({
    uid: 'ACT',
    username: nombre
})


const usuarioActivo = getUsuarioActivo('Leandro');
console.log(usuarioActivo);

















