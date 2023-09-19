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
        <div className='btn-selec'>
            <div className='subyba'>
                <Button  className="menos" onClick={restar} text="-"/>
                <h2>{numero}</h2>
                <Button  className='mas' onClick={sumar} text="+"/>
            </div>
            <Button className="comprar" text={'comprar'} disabled={numero === 0} onclick={()=>onAdd(numero)}/>
        </div>
    )
};
export default ItemCount;