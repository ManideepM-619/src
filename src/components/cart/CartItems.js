import React, { useContext } from 'react'
import './Cartitems.css'
import {ShopContext} from '../../context/ShopContext';
import remove_icon from '../images/cart_cross_icon.png';

const CartItems = () => {
 
    const{gtca,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
       {all_product.map((p)=>{
        if(cartItems[p.id]>0){
           return<div>
                  <div className='cartitems-format'>
                    <img src={p.image} alt='' className='cart-product-icon'/>
                    <p>{p.name}</p>
                    <p>{p.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[p.id]}</button>
                    <p>${(p.new_price)*(cartItems[p.id])}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(p.id)}}alt=''/>
                    </div>
                    <hr/>
                </div>
           
        }
        return null;
       })}
       <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Total</h1>
        </div>
        <div className='cartitems-total-item'>
            <p>Subtotal</p>
            <p>${gtca()}</p>
        </div>
        <hr/>
        <div className='cartitems-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>
        <hr/>
        <div className='cartitems-total-item'>
            <h3>Total</h3>
            <h3>${gtca()}</h3>
        </div>
        <button>PROCEED TO CHECKOUT</button>
       </div>
       <div className='cartitems-promocode'>
        <p>Apply promo</p>
        <div className='cartitems-promobox'>
            <input type='text' placeholder='code...'>      
            </input>
            <button>Submit</button>
        </div>
       </div>
    </div>
  )
}

export default CartItems