import { useContext, useState,useEffect } from 'react';
import ItemCount from './ItemCount.jsx';
import PrincipalButton from './PrincipalButton';
import '../styles/ItemDetail.css';
import {CartContext} from '../context/CartContext';
import '../styles/btnFinalizar.css'
import '../styles/principalButton.css';
import './button';
import {Link} from "react-router-dom";

const ItemDetail = ({producto})=> {
    const [addItem] = useContext(CartContext)

    const [numero, setNumero]= useState(initial);
    const [cantidad, setCantidad]= useState();
    const {cart} = useContext(CartContext)
}
const onAdd =(cantidad) => {
    addItem =(producto, cantidad);
    console.log(`Compraste ${cantidad} productos`);
}

    const addItem =(cantidad, producto)=>{
    const itemToCart = {
        id:obj.id,
        imgUrl: obj.imag,
        price:obj.price,
        detail:Object.title + " " + obj.Marca + " " + obj.Modelo,
        cantidad: cantidad
    };
        cart.addToCart(itemToCart);
        cart.setCantidad(cantidad)
    }

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
    return(
            <div className='detail'>
                    <img className='card-img'src={producto.image} alt={producto.title}/>
                <div>
                    <h3 className="nombre">Detalle de: {producto.title}</h3>
                        <p className="valor">${producto.price}</p>
                        <p className="stock">Stock:{producto.stock}</p>
                        <p className="descripcion">{producto.description}</p>
                            <PrincipalButton texto='-'onClick={restar}/>
                                <span className='num'>{numero}</span>
                            <PrincipalButton texto='+'onClick={sumar}/>
                    <ItemCount  initial={0} stock={producto.stock} onAdd={onAdd} />
                </div>
                <div className='subyba'>
                    { ItemCount === 0 ? <ItemCount stock={item.stock} onAdd={onAdd}></ItemCount>:<Link to='/cart'><button> Agregar al Carrito </button></Link>}
                </div>
            </div>
    )
export default ItemDetail