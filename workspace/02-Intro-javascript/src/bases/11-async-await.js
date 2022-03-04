const getImagen = async () => {

    try {
        const api_key = 'fwHVLO449TE0bty2sFoKDrDRETR2g4F3';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        return await resp.json();
    } catch (error) {
        console.log(error);
    }

}

getImagen().then(({ data }) => {
    
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}).catch(console.warn);



// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);