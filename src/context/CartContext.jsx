import{ createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    console.log(cart);

    const addItem =(item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map((producto)=>{
                if(producto.id === item.id){
                    return {...producto, cantidad: producto.cantidad + cantidad }
            }else {
                return producto
            }
            }))
            }else{(cart.map)
            setCart([...item,{...item, cantidad}])
            }
        }
    
    const clear = () =>{
        setCart([])
    }
    const isInCart =(id)=> {
        return cart.some((item)=> item.id === id)
    }
    const deleteItem =(id)=>{
        setCart(cart.filter((item) => item.id !== id))
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