import { render } from '@testing-library/react';

import { GifItem } from '../../components/GifItem';


describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://www.google.com'


    test('Debe de hacer match con el snapshop', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    

});