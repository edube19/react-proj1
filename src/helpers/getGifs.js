export const getGifs = async(category) => {
    const limite_gifs = 10
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5xcouSOrkySRBmc265tsDlHFitwSuqw2&q=${category}&limit=${limite_gifs}&`
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()
    const gifs = data.map( img =>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
  }