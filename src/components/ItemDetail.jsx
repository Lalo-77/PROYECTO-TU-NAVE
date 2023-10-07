import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import '../styles/ItemDetail.css';
import {CartContext} from '../context/CartContext'

const ItemDetail = ({producto})=> {
    
    const [addItem]= useContext(CartContext)
    
    const onAdd =(cantidad) => {
        addItem(producto,cantidad)
        console.log(`Compraste ${cantidad} productos`);
    }

    return(
        <div className='detail'>
                <h3 className="nombre"> Detalle de:{producto.title}</h3>
                <img className='card-img'src={producto.image} alt='producto.title'/>
                <p className="descripcion">{producto.description}</p>
                <p className="valor">${producto.price}</p>
                <p className="stock">Stock:{producto.stock}</p>
                <ItemCount  initial={0} stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}
export default ItemDetail