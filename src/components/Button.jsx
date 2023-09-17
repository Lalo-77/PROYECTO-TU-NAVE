import React from 'react'
import '../styles/index.css'

export const Button =({onclick, text}) => {//function
    return (
        <button onClick={onclick}>
            <p>{text}</p>
        </button>
    );
}
