// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};


// console.log(nombre);
// console.log(edad);
// console.log(clave);

const userContext = ({ nombre, edad, clave, rango = 'Capitán' }) => {

    // console.log(edad, clave, nombre, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 21.22,
            lng: -12.55
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = userContext(persona);


console.log(nombreClave, anios);
console.log(lat);
console.log(lng);


