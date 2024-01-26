import React from 'react'
import './ProductDisplay.css'
import star_icon from '../images/star_icon.png'
import star_dull_icon from '../images/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='producdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>  
            </div>
           <div className='productdisplay-img'>
            <img className='productdisplay-main-img'
             src={product.image} alt=''/>
            </div>   
          </div>
           <div className='productdisplay-rigt'>
           <h1>{product.name}</h1>
           <div className='productdisplay-right-star'>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
           <p>(122)</p>
           </div>
           <div className='productdisplay-right-prices'>
             <div className='prductdisplay-right-price-old'>${product.old_prrice}</div>
             <div className='prductdisplay-right-price-old'>${product.old_prrice}</div>
           </div>
           <div className='productdisplay-right-description'>

           </div>
           <div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='productdisplay-right-size'>
              <div>10L</div>
              <div>15L</div>
              <div>20L</div>
              <div>25L</div>
            </div>
           </div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           </div>
    </div>
  )
}

export default ProductDisplay