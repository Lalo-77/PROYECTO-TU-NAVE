import { createContext } from 'react';
import { useState } from 'react';

export const CartContext= createContext()

export function CartProvider({children}){

    const [cart, setCart] = useState([])

function addItem(item, cantidad){//agregar item al carrito
    setCart([...cart, { ...item, cantidad }]);

}
function removeItem(id) {

const newCart = cart.filter((value)=> value.id !== id);

    setCart(newCart)
}
return ( 
    <CartContext.Provider value={{cart, addItem, removeItem }}>{children}</CartContext.Provider>
    );
} 
