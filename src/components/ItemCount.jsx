import { useState } from 'react';
import{ Button } from './Button';
import '../styles/ItemCount.css';

const ItemCount = ({stock, onAdd, initial }) => {
    const [numero, setNumero]= useState(initial); 

        const sumar = () => {
        if (numero < stock){
        setNumero(numero + 1);

        }
    }
        const restar = ()=>{
        if(numero > 0 ){
        setNumero(numero - 1)
        }
    }
    return (
        <div className='counter'>
            <div className='subyba'>
                <Button onClick={restar} text="-"></Button>
                <span className='num'>{numero}</span>
                <Button onClick={sumar} text="+"></Button>
            </div>
            <Button className="comprar" text={'Agregar  al Carrito'} disabled={numero === 0} onclick={()=>onAdd(numero)}></Button>
        </div>
    )
};
export default ItemCount;