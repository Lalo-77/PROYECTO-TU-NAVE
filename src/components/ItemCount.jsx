import { useState,useContext} from 'react';
import './button';
import '../styles/ItemCount.css';
import '../styles/btnFinalizar.css'
import PrincipalButton from '../components/PrincipalButton'
import '../styles/principalButton.css'
import { CartContext } from '../context/CartContext';

const ItemCount = ({stock, onAdd, initial}) => {
    const [numero, setNumero]= useState(initial);
    const [item,setItem]= useState()
    const {addItem, removeItem}= useContext(CartContext)

        const sumar = () => {
        if (numero < stock){
        setNumero(numero + 1);
        }
    }
        const restar= ()=>{ 
        if(numero > 0){
        setNumero(numero - 1)
        }
    }
    return (
        <div className='counter'>
            <div className='subyba'>
                <PrincipalButton texto='-'onClick={restar}/>
                    <span className='num'>{numero}</span>
                <PrincipalButton texto='+'onClick={sumar}/>
            </div>
                <button  onClick={() => {setItem({...producto, quantity: numero})}} className = "comprar" disabled={numero === 0} onclick={()=>onAdd(numero)}>Agregar al Carrito</button>
                    <span className='espacio'></span>
                <button onclick={() => {addItem(item, numero)}} className = 'Finalizar-Compra' text = {'Finalizar Compra'}>Finalizar Compra</button>
                    <span className='espacio'></span>
                <button  onClick={() => {removeItem(producto)}} className = 'Borrar-Producto' text = {'Borrar Producto'}> Borrar Producto </button>
        </div>
    )
};
export default ItemCount;