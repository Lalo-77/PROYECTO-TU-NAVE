import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
const Cart =()=> {
    const {carrito, limpiar, total} = useContext(CartContext)
    return(
    <div>
        {carrito.length 
        ?   <div> 
            <div>{carrito.map((item) => <CartItem key={item.id} item={item}/> )}</div>
            
            <p>Total a pagar: ${total()}</p>
                <div>
                    <button className='vaciar'onClick={limpiar}>Vaciar carrito</button>
                    <Link className='finalizar'>Terminar comprar</Link>
                </div>
            </div>
            : <div>
                <h3>Tu carrito esta vacio!</h3>
                <Link to='/' className='btnCar'>Ir a Comprar</Link>
            </div>}
    </div>
    )
}
export default Cart 