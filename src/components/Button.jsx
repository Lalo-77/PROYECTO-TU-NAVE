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

const Button =({Button}) =>{//function

    return (
    <button onClick={Button}>
        Sumar contador
    </button>
    );
} // en el onclick ejcutamos la function 
{
    
