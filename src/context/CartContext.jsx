import { createContext } from "react";
import {useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item,cantidad) => {
        setCart([...cart,{...item,cantidad}])

        // if(condition){

        // }else{
        //     setCart([...cart,{...item,cantidad}])
        // }
    }

    const clearCart = () => {
        setCart([]);
    }

    return <CartContext.Provider value={{cart,addToCart}}>
                {children}
            </CartContext.Provider> 
}

export default CartProvider