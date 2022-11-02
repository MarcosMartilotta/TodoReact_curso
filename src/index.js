import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App/index';


// const e = React.createElement

// ReactDOM.render(e(Que), donde)

//Esto es como poner lo de arriba pero de una maneara mas comoda

//App es un componente que react utiliza para renderizar, lo identificamos porque empieza con mayuscula por convencion


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

