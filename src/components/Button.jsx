import React from 'react'
import '../styles/index.css'

export const Button =({onclick, text}) => {//function
    return (
        <button className='btn-cont' onClick={onclick}>
            <p>{text}</p>
        </button>
    );
}
