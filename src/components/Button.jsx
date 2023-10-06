import { CartContext } from './CartContext';
import '../styles/Button.css'

export const Button =({onclick, text}) => {//function
    return (
        <button className='btn-count' onClick={onclick}>
            <p className='text'>{text}</p>
        </button>
    );
}

