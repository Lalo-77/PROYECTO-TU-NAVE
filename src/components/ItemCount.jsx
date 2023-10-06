import { useState,useContext} from 'react';
import{ Button } from './Button';
import '../styles/ItemCount.css';
import '../styles/btnFinalizar.css'
import PrincipalButton from '../components/PrincipalButton'
import '../styles/principalButton.css'
import '../styles/Button.css'
import { CartContext } from './CartContext';

const ItemCount = ({stock, onAdd, initial}) => {
    const [numero, setNumero]= useState(initial);
    const [item,setItem, removeItem]= useState()

    const {addItem}= useContext(CartContext)

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
            <Button onClick={() => {setItem({...producto, quantity:numero})}} className = "comprar" text={'Agregar  al Carrito'} disabled ={numero === 0} onclick={()=>onAdd(numero)}></Button>
            <span className='espacio'></span>
            <Button onClick={() => {addItem(item, numero)}} className= "Finalizar Compra" text={'Finalizar Compra'}></Button>

            <span className='espacio'></span>

            <Button onClick={()=>{removeItem(producto.id)}} className='Borrar Producto' text={'Borrar Producto'}></Button>
            
        </div>
    )
};
export default ItemCount;