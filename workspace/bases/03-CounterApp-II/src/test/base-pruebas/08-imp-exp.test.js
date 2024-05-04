import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';


describe('Pruebas en 08-imp-exp', () => {

    test('getHeoreById debe de retortar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        // expect(hero).toEqual({ id: 1, name: 'Barman', owner: 'DC' });
    });

    test('getHeoreById debe de retortar undefined si no exite el ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('getHeoresByOwner debe de regresar herores de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        
    });


})