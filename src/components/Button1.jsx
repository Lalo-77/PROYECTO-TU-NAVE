import React from 'react';
import {useState} from 'react'
import './App.css'
const Texto = ({text}) => {// props

return (
        <div> 
            {text} 
        </div>
)
};

const Button =({boton1}) =>{//function

    return (
    <button onClick={boton1}>
        Sumar contador
    </button>
    );
} // en el onclick ejcutamos la function 

function App() {

    const [count, setCount]= useState(0)
    
      return (
        <div>
          <Texto text="Contador" /> 
          <Texto text={count} />
          <Button callback={() => setCount(count + 1)} />
        </div>
      );
    }
    
    export default App
    
