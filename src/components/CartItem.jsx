import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem =(item) => {
    const {borrarItem}= useContext (CartContext)
    return(
        <div>
            <img src={item.img} alt='item.name'/>
            <p>{item.name}</p>
            <p>${item.precio}</p>
            <p>{item.cantidad}</p>
            <p>Sub total : ${item.cantidad * item.price}</p>
            <button className='peligro' onClick={()=>borrarItem(item.id)} >X</button>
        </div>
    )
}
export default CartItem 