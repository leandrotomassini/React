import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         // resolve(heroe);
//         resolve('No se pudo encontrar el héroe.');
//     }, 2000);

// });


// promesa.then((heroe) => {
//     console.log(heroe);
// })
//     .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id);
            p1? resolve(p1) : reject('El héroe no existe.')
        }, 2000);

    });

}

getHeroeByIdAsync(1).then(console.log)
.catch(console.warn)