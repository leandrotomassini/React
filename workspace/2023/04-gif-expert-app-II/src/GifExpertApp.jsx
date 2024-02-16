import { useState } from 'react';
import { GrifGrid, AddCategory } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {
                categories.map((category) => (
                    <GrifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    );
}
