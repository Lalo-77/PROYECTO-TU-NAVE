import { useContext } from 'react'
import carrito from "../../public/img/carrito.png"
import { CartContext } from "../../src/context/CartContext"

const CartWidget = () => {
const {cartCantidad} =useContext(CartContext)

    return (
        <div className="cart">
        <img className="imagen" src={carrito} />
        {cartCantidad () > 0 &&  <Badge className="cantidad">{cartCantidad()}</Badge>}
        </div>
    )
}
export default CartWidget