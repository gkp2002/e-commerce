import React, { createContext, useState } from "react";
import all_product from "../Component/Assest/all_product";
import Cart from "../Pages/Cart";
import CartItem from "../Component/CartItem/CartItem";
 
export const shopContext = createContext(null);

const getdefaultcart = () =>{
    
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;            
    }
    return cart;
}

const ShopContextProvider = (props)=>{
   
    const [cartItem,setCartItem] = useState(getdefaultcart());

    
    const addTocart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   
        
    }
    const RemoveFromcart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
    }
     
   const  getTotalCartamount = () => {
    let totalAmount = 0;
    for(const item in cartItem){
        if(cartItem[item]>0){
            let iteminfo = all_product.find((product)=>product.id===Number(item))
           
            totalAmount += iteminfo.new_price * cartItem[item]
        }
    }
    return totalAmount;
   }

     const getTotacartitem  = () => {
        let total=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                total += cartItem[item]
            }
        }
        return total;
     }

    const contextValue ={getTotacartitem,all_product,cartItem,addTocart,RemoveFromcart,getTotalCartamount};

    return(
        <shopContext.Provider value={contextValue}>
             {props.children}
        </shopContext.Provider>
    )

}

export default ShopContextProvider;