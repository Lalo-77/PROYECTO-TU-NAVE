import { useContext,useState,} from 'react';
import{ Button } from './Button';
import '../styles/ItemCount.css'
import '../styles/btn-Finalizar.css'
import {CartContext} from './CartContext';

const ItemCount = ({stock, onAdd, initial}) => {
    const [numero, setNumero]= useState(initial);
    const {cart, addItem, removeItem } = useContext(CartContext);
    const [item,setItem]=useState()

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
                <Button className='btn-men' onclick={restar} text="-"></Button>
                    <span className='num'>{numero}</span>
                <Button className='btn-mas' onclick={sumar} text="+"></Button>
            </div>

            <Button onClick={() => setItem({...producto, quantity:numero})} className = "comprar" text={'Agregar  al Carrito'} disabled ={numero === 0} onclick={()=>onAdd(numero)}></Button>
                <span className='espacio'></span>

            <Button onClick={() => {addItem(item, numero)}} className= "Finalizar Compra" text={'Finalizar Compra'}></Button>
        </div>
    )
};
export default ItemCount;