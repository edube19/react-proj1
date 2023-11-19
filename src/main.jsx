import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // el modo estricto ayuda a detectar errores
  <React.StrictMode> 
    <GifExpertApp/>
  </React.StrictMode>
);
