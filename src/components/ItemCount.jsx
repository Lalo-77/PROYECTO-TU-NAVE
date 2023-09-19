import '../styles/index.css'
import { useState } from "react";
import{ Button } from "./Button";

const ItemCount = ({stock, onAdd, initial}) => {
    const [numero, setNumero]= useState(initial);  
        const sumar = () =>{
        if (numero < stock){
        setNumero(numero + 1);
        }
    }
        const restar = ()=>{
        if(numero > 0 ) {
        setNumero(numero - 1)
        }
    }

    return (
        <div >
            <div>
                <Button onClick={restar}>-</Button>
                <h2>{numero}</h2>
                <Button onClick={sumar}>+</Button>
            </div>
            <Button text={'comprar'} disabled={numero === 0} onclick={()=>onAdd(numero)}>Comprar</Button>
        </div>
    )
};
export default ItemCount;