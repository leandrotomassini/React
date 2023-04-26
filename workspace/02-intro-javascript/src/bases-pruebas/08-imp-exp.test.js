import { getHeroeById, getHeroesByOwner } from "../bases/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {


    test('getHeroePorId debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroePorId debe de retornar undefined si no existe el  ID', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toEqual(undefined);

    });


        test('getHeroesByOwner debe de regresar heroes de DC', () => {
           
            const owner = 'DC';
            const heroes = getHeroesByOwner(owner);
            
            expect(heroes.length).toBe(3);
            expect(heroes).toEqual([
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                },
                {
                    id: 3,
                    name: 'Superman',
                    owner: 'DC'
                },
                {
                    id: 4,
                    name: 'Flash',
                    owner: 'DC'
                }
            ]);
           
        });

})