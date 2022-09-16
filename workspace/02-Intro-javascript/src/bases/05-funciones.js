// Funciones en JS
// const saludar = function (nombre) {
//     return `Hola ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = nombre => `Hola ${nombre}`;
const saludar4 = () => `Hola mundo`;

// console.log(saludar('Leandro'));

// console.log(saludar);

console.log(saludar2('Vegeta'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Usuario123'
    }
};

const getUser2 = () => ({
    uid: 'ABC123',
    username: 'Usuario123'
});

console.log(getUser());
console.log(getUser2());

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Leandro');
console.log(usuarioActivo);

























