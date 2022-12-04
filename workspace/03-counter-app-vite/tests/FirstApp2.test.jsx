import { render, screen } from "@testing-library/react";

import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtítulo';

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe de mostrar el título en un H1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML.toContain(title));
    });

    test('Debe de mostrar el subtítulo enviado por props', () => {
        render(<FirstApp title={title} subtitle={subTitle} />);
        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
});