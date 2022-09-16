// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

// console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));

// console.log(owners);

