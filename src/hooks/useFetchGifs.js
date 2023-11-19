import { useState,useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = ( category) => {
    const [images, setImages] = useState([]);//cargan las iamgenes como nulas
    const [isLoading,setIsLoading] = useState(true);
    
    //para evitar repeticiones y disparar efectos secundarios
    // ejemplo cuando se renderiza, quiero q hague un efecto 
    const getImages = async() => {
      const newImages = await getGifs(category);//manda la peticion http
      setImages(newImages);
      setIsLoading(false);
    }
    
    useEffect( () => {//manda llamar el getImages
      getImages();
    }, []);
    
  return {
    images,
    isLoading
  }
  
}

