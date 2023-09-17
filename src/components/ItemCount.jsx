import '../styles/index.css'
import { useState } from "react";
import{ Button }from "./Button";

const ItemCount = () => {

    const [numero, setNumero]= useState(numero(0));

    const sumar = () =>{
    setNumero(numero + 1);
        
    }
    const restar = ()=>{
    setNumero(numero - 1);
    }

    return (
        <div>
            <h2>{numero}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <Button text={'COMPRAR'} onclick={()=>console.log(numero)}/>
        </div>
)
};
export default ItemCount;