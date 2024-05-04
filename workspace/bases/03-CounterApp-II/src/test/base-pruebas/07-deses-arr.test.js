import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('pruebas en el archivo 07-deses-arr.test.js', () => {

    test('Debe de retornar un string y un numero', () => {

        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));
    });

});