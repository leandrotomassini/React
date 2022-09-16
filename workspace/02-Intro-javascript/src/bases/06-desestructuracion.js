// Desestructuración
// Asignación desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const context = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    // console.log(nombre, edad, rango);

    return {
        nomreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.55,
            lng: -12.884
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = context(persona);
console.log(nombreClave, anios);
console.log(lat, lng);

