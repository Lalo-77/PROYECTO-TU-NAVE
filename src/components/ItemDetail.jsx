import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {ItemCount} from "./ItemCount";
import productos from "../data/productos.json";
import Button from "./Button";

const ItemDetail = ({productos})=> {
    
    return(
        <div className='detail'>
            {
            productos?(
            <div>

            {productos.map(productos => <section key={productos.id}>
                <img className='card-img' src={productos.image} alt=''/>
                <h3>{productos.title}</h3>
                <p>productos.descripcion</p>
                <p>${productos.price}</p>
                <p>{productos.stock}</p>
                <Button/>
                </section>)}
                
            </div>
            ) :null
            }
            
            {
            productos? <ItemCount stock={productos.stock} inicial="1"/> :null
            }
        </div>
        )
    }
export default ItemDetail