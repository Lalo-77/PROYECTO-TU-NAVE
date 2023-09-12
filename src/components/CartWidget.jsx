import carrito from "../assets/img/carrito.png"

const CartWidget = () => {
    return (
        <div className="cart">
        <img className="imagen" src={carrito} />
        <span className="cantidad">0</span>
        </div>
    )
}
export default CartWidget