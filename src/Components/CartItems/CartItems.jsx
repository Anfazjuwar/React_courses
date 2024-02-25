 import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'
 
 const CartItems = () => {
  const {all_product,CartItems,removeFromcart, gettotalcartAmount}= useContext(ShopContext)
   return (
     <div className='cartitems'>
      <div className="cartitems-format-main"> 
      <p>Products</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Remove</p>
      <p>Total</p>
      <p>Remove</p>
      
      </div>
      <hr/>
        {all_product.map((e => {
          if(CartItems[e.id]>0)
          {
            return <div>
                        <div className="cartitems-format  cartitems-format-main">
                          <img src={e.image} alt="" className='carticon-product-icon' />
                          <p>{e.name}</p>
                          <p>${e.new_price}</p>
                          <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                          <p>${e.new_price*CartItems[e.id]}</p>
                          <img className='carticon-remove-icon' src={remove_icon} onClick={()=>{removeFromcart(e.id)}} alt="" />
                        </div>
                    </div>
                   }
                   return null;
        }))}

        <div className="carditems-down">
          <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
              <div className="cartitem-total-item">
                <p>
                  subtotal
                </p>
                <p>
                  ${gettotalcartAmount()}
                </p>
              </div>
              <hr/>
              <div className="cartitem-total-item">
                <p>shipping fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className='cartitem-total-item'>
                <h3>Total</h3>
                <h3>${gettotalcartAmount()}</h3>
              </div>

            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="caritems-promocode">
            <p>If you have promo code , Enter it here</p>
            <div className="carditems-promo-box">
              <input type='text' placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
       
    
   )
 }
 
 export default CartItems
 