import React from 'react'

export const GifExpertApp = () => {

    const categories = ['One punch', 'Samurai X', 'Dragon Ball'];

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return <li>Hola</li>
                    })
                }
            </ol>
        </>
    )
}
