import{ createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart, setCart ] =useState([])
    const addItem =(item, cantidad) => {
        if(isInCart(item.id)){
        setCart(cart.map((producto)=>{
            if(producto.id === item.id){
                return{...producto,cantidad:producto.cantidad + cantidad }
            }else{
                return producto
            }
        }))
            console.log('ya esta en el carrito');
        }else{
            setCart([...cart, {... item, cantidad}]);
    }
    const clear = () =>{
                setCart([])
            }
    const isInCart = (id)=> {
                    return cart.some((item) => item.id === id )
        
    } 
    const deleteItem =(id)=>{
        setCart(cart.filter((item) => item.id !== id))
        }




    const[cartList, setCartList]= useState([])
    const [cantItems,setCantItems]= useState(0);
    const [totalPrice,setTotalPrice] = useState(0)
    
    const addToCart= (item)=> {
        if(cartList.length < 1){
            setCartList([...cartList.item]);
            setTotalPrice(parceInt(item.price)*item.cantidad);
        }else{
            if(isInCart(item.id)){
            const aux= cartList.findIndex(obj => obj.id ===item.id);
            cartList[aux].cantidadad += item.cantidad;
            setCantItems(cantItems + item.cantidad);
            setTotalPrice(totalPrice +(parceInt(item.price)*item.cantidad));
            }else{
                setCartList([...cartList,item]);
                setTotalPrice(totalPrice + (parceInt(item.price)*item.cant));
            }
        }
    }
    const cartCantidad =()=> { //funcion que va a sumar
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }
    const total = () =>{
        return cart.reduce((acc, item)=> acc + item.cantidad * item.price, 0)
    }
        return(
            <CartContext.Provider value = {{cart, addItem, clear, deleteItem, cartCantidad, total}}>
                {children}
            </CartContext.Provider>
    )
}
}