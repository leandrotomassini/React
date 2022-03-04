const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 282828,
        lat: 14.322,
        lng: 34.2232
    }
};


const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);