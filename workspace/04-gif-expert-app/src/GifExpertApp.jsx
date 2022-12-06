import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Iron Man']);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* Título */}
            <h1>Gif Expert App</h1>
            <button onClick={onAddCategory}>Agregar</button>

            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />

            {/* Listado de Gif */}
            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>

            {/* Gif Item */}
        </>
    )
}
