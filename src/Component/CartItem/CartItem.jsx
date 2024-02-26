import React, { useContext } from 'react'
import './CartItem.css'
import { shopContext } from '../../Context/ShopContext'
import remove_icon from '../Assest/cart_cross_icon.png'

function CartItem() {
 
     const {getTotalCartamount,all_product,cartItem,RemoveFromcart} = useContext(shopContext);

  return (
    <div className='cartitems'>
           <div className='cartitems-format-main'>
             <p>Products</p>
             <p>Title</p>
             <p>Price</p>
             <p>Qantity</p>
             <p>Total</p>
             <p>Remove</p>
           </div>
           <hr/>
           {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return <div>
                  <div className='cartitem-format cartitems-format-main'>
                  <img src={e.image} className='carticon-product-icon ' />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                  <p>${e.new_price*cartItem[e.id]}</p>
                  <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{RemoveFromcart(e.id)}}/>
                </div>
                <hr/>
                </div>
            }
            return null;
           })}
           <div className='cartitems-down'>
              <div className='cartitem-total'>
              <h1>Cart Totals</h1>
              <div>
                <div className='cartitems-total-item'>
                 <p>Subtotal</p>
                 <p>${getTotalCartamount()}</p>
                </div>
              <hr/>
              <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartamount()}</h3>
              
              </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
              </div>
                <div className='cartitems-promocode'>
                   <p>If you have promo code Enter it here</p>
                    <div className='cartitem-promobox'>
                    <input type='text' placeholder='promo code'/>
                      <button>Submit</button>
                    </div>
                </div>
           </div>
    </div>
  )
}

export default CartItem
