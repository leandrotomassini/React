import { heroes } from '../datos/heroes';

const heroesData = heroes ?? [];

export const getHeroeById = (id) => heroesData.find((heroe) => heroe.id === id);
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);