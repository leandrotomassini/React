import { getHeroeById } from "../bases/08-imp-exp";
import { getHeroeByIdAsync } from "../bases/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroesbyIdAsyn debe de retornar un héroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            })
            .catch(done);
    });


});