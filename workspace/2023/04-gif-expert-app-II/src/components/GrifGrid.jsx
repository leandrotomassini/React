import { useFetchGifs } from '../hooks/useFetchGifs';

import { GridItem } from './GridItem';


export const GrifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<p>Cargando...</p>)
            }

            <div className='card-grid'>
                    {
                        images.map((image) => (
                            <GridItem 
                                key={image.id}
                                {...image}
                            />
                        ))
                    }
            </div>
        </>
    );
}
