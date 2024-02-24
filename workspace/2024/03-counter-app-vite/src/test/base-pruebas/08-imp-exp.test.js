import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';


describe('Pruebas en 08-imp-exp.js', () => {

    test('getHeroeById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe de retornar un undefined si no existe el ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe de regresar heroes de DC', () => {
        const owner = 'DC';
        const heores = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });
});