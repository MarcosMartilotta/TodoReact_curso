import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './appUi';
 
//const defaultTodos = [
//  {text: 'Cortar cebolla', completed: true},
//  {text: 'Tomar curso introduccion React', completed: true},
//  {text: 'Llorar con la llorona', completed: false},
//  {text: 'Asd xdxd', completed: false},
//];



function App() { //Empieza con mayus porque es un componente

 
  //Sirve para que el codigo no se ejecute cada vez que se renderiza la app, sino cuando pasa algo en especifico
  
/*   React.useEffect(() => {
    console.log('Render dentro de')
  }, []) */

  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
   
  );
}
  export default App;
  