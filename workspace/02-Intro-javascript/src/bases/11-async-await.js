// const getImagenPromesa = () => new Promise(resolve => resolve('https://dsadas.com'));
// getImagenPromesa().then(console.log);

const getImagen = async () => {
    try {


        const apiKeey = 'BQ13XKEXDFgRsDKMl5fA1iLi1zxhaTK6';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKeey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}

getImagen();
