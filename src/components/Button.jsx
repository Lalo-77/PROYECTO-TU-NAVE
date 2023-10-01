import React from 'react'
import '../styles/Button.css'

export const Button =({onclick, text}) => {//function
    return (
        <Button className='btn-count' onClick={onclick}>
            <p>{text}</p>
        </Button>
    );
}

