/** @jest-environment jsdom */
import { render } from '@testing-library/react';

import { FirstApp } from '../FirstApp';


describe('Pruebas en <FirstApp />', () => {

    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, Soy Goku';

        const { container } = render(
            <FirstApp
                title={title}
                subtitle={123}
            />
        );

        expect(container).toMatchSnapshot();
    });


    test('Debe de mostrar el título en un h1', () => {

        const title = 'Hola, Soy Goku';

        const { container, getByText, getByTextId } = render(
            <FirstApp
                title={title}
                subtitle={123}
            />
        );

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTextId('test-title').innerHTML).toContain(title);

    });

    test('debe de mostrar el subtítulo enviado  por props', () => {

        const title = 'Hola, Soy Goku';
        const subtitle = "Soy un subtitulo"

        const { getByText } = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );

        expect(getAllByText(subtitle).length).toBe(2);
    });

});