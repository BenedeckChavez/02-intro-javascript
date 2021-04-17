

    // const getImagenPromesa = () => new Promise((resolve,reject) => resolve('https://dkadlkjflkajsdf.com'))
    // getImagenPromesa().then(console.log)


    const getImage = async() => {
        try
       { const apiKey = '5Vk2AyiDQBz9QOshtiC3jXO8iiTNX6ne';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)}
         catch(err) {
            console.error(err);
        }

    };

    getImage()


    // const apiKey = '5Vk2AyiDQBz9QOshtiC3jXO8iiTNX6ne';
    // const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    // // peticion.then( resp => {
    // //     resp.json().then(data => {
    // //         console.log(data);
    // //     })
    // // }).catch( console.warn )
    // peticion.then( resp => resp.json())
    //         .then( ({data}) => {
    //             const {url} = data.images.original;

    //             const img = document.createElement('img');
    //             img.src = url;

    //             document.body.append(img)

    //         })
    //         .catch( console.warn )
