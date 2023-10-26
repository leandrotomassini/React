
import { useState } from 'react';

import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);


  return (
    <>
      <h1>Gif expert app</h1>

      <AddCategory setCategories={setCategories} />

      <ol>

        {
          categories.map(category => {
            return <li key={category}>{category}</li>;
          })
        }

      </ol>

    </>
  )
}
