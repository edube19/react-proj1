import { useState } from 'react';
import { AddCategory,GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['EU4']);//inicializarlo como un arreglo
    //console.log(categories);
    //const [newCategory, setNewCategory] = useState(''); // Estado para almacenar la nueva categoría ingresada

    const onAddCategory = (newCategory) => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
        
      // Verificar que la nueva categoría no esté vacía
      //setCategories([...categories, newCategory]);//ponerlo al final
      //para ponerlo al incio seria [newCategory,...categories]
      setCategories([newCategory,...categories]);
      //setNewCategory(''); // Limpiar el campo de entrada después de agregar
    }
    };
    return (
        <>
        {/*titulo*/}
         <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory 
        //setCategories = {setCategories}
        onNewCategory = { (value) => onAddCategory(value)}
        />
        
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        {/*Listado de gifs*/} 
        
            {categories.map( (category ) => (
                (
                    <GifGrid key = {category} category={category}/>
                )
            ))}
           
       

        
        </>
    )
};