import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Item } from "./Item"
import {ItemCount} from "./ItemCount"

export const ItemDetail = ({productos})=> {
    
    return(
        <div className='detail'>
            {
            productos?(
            <div>
                <img className='card-img' src={productos.img} alt=''/>
                <h3>{productos.title}</h3>
                <p>productos.descripcion</p>
                <p>$ {productos.precio}</p>
            </div>
            ) :null
            }
            
            {
            productos? <ItemCount stock={productos.stock} inicial="1"/> :null
            }
        </div>
        )
    }
