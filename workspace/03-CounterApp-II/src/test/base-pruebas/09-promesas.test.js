import { getHeroeByIdAsync } from '../../base-pruebas/08-imp-exp';


describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un Héroe', () => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then(hero => {
                expect(true).toBe(false)
            });




    });

});