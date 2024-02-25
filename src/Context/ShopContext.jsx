import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);
const getdefaluteCart = () => {
  let cart = {};
  for (let index = 0 ; index < all_product.length+1;index++){
    cart[index] = 0
  }
  return cart;
}
  const ShopContextProvider = (props) => {
    
  const [CartItems, setCartItems]=useState(getdefaluteCart());  
   
  
  const addTocart = (itemID) => {
    console.log("Adding to cart:", itemID);
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  }
  
  const removeFromcart = (itemID) =>{
    setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
  }
  
  const gettotalcartAmount = () => {
    let totalAmount = 0;
    for(const item in CartItems)
    {
      if (CartItems[item]>0)
      {
        let itemInfo = all_product.find((product) => product.id===Number(item))
        totalAmount += itemInfo.new_price * CartItems[item];
      }
      
    }
    return totalAmount;
  }
   const getTotalCartItems = () =>{
    let totalItem = 0;
    for (const item in CartItems){
      if(CartItems[item]>0){
          totalItem+=CartItems[item]
      }
    }
    return totalItem;

   }
 


  const contextValue = {getTotalCartItems,all_product,CartItems, addTocart,removeFromcart, gettotalcartAmount};

  return(
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )

}
export default ShopContextProvider; 