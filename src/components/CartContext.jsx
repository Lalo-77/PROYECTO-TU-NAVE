import {useState} from "react";
import { createContext } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart]= useState([])

    function addItem(item, cantidad){
        setCart([...cart, {...item, cantidad }]);
    
    }
    function removeItem (id) {
        const newCart = cart.filter((value) => value.id !==id);

        setCart(newCart)
    }
    return (
        <CartContext.Provider value={{cart,addItem }}>{children}</CartContext.Provider>
    );
}
