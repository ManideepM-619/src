import React, { createContext } from "react";
import all_product from "../components/images/all_product";
import { useState } from "react";
import CartItems from "../components/cart/CartItems";

export const ShopContext = createContext(null);
const getDefaultcart=()=>{
    let cart={};
    for (let index =0; index <all_product.length+1; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider =(props) =>{
    const [cartItems, setCartItems] = useState(getDefaultcart());
    
    const addToCart = (productId) =>{
        setCartItems((prev)=>({...prev,[productId]:prev[productId]+1}))
        console.log(cartItems)
    }
    const removeFromCart = (productId) =>{
        setCartItems((prev)=>({...prev,[productId]:prev[productId]-1}))

    }
    // const getTotalCartAmount =()=>{
    //     let totalAmount=0;
    //     for(const item in cartItems)
    //     {
    //     if (cartItems[item]>0)
    //     {
    //          let itemInfo= all_product.find((product)=>product.id===Number(item))
    //          totalAmount += itemInfo.new_price * cartItems[item];
    //     }
    //     return totalAmount;
    //     }
    // }
    const gtca=()=>{
        let tA=0;
        for(const i in cartItems)
        {
            if(cartItems[i]>0)
            {
                let iI=all_product.find((product)=>product.id===Number(i))
                tA += (iI.new_price)*(cartItems[i])
            }
            return tA;
        }
    }
    const getTotalCartItems=()=>{
        let totalItme=0;
        for(const item in CartItems)
        {
            if(cartItems[item]>0)
            {
                totalItme+= cartItems[item];
            }
        }
        return totalItme;
    }
    const contextValue ={getTotalCartItems,gtca,all_product,cartItems,addToCart,removeFromCart};
     return(
         <ShopContext.Provider value={contextValue}>
          {props.children}
         </ShopContext.Provider>
     )
}

export default ShopContextProvider; 