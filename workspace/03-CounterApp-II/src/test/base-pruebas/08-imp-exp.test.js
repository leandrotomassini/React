import { getHeroeById } from "../../base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {

    test('getHeoreById debe de retortar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
    });

    
})