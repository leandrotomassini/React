import { getHeroById } from './bases/08-import-export';


// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroById(2);
//         resolve(heroe);
//     }, 2000);

// });


// promesa.then((heroe) => {
//     console.log(`Then de la promesa ${heroe.owner}`);
// }).catch(err => console.warn(err));


const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroById(id);
            (heroe) ? resolve(heroe) : reject('No se pudo encontrar el heroe');
        }, 2000);

    });

}

getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.warn);

