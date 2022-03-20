import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=fwHVLO449TE0bty2sFoKDrDRETR2g4F3';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        setimages(gifs);
    }

    getGifs();

    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(({ id, title }) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
        </div>
    )
}
