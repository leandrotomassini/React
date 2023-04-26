import { retornaArreglo } from "../bases/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('debe de retornar un string y un número', () => {
       
       const [letters, numbers] = retornaArreglo();

       expect(letters).toBe('ABC');

       expect(numbers).toBe(123);

        expect(typeof numbers).toBe('number');
        expect(typeof letters).toBe('string');
    
    });


});