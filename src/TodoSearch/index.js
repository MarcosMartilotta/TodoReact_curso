import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    //const [searchValue, setSearchValue] = React.useState(''); Esto devuelve un array de dos posiciones
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return(
        <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange} 
        />
    )
}

export{TodoSearch};