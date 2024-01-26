import React from 'react'
import './NewCollections.css'
import new_collections from '../images/new_collections'
import Products from './Products'
import '../pages/CSS/ShopCategory.css'

const NewCollections = () => {
  return (
    <div className='shop-category'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='shopcategory-products'>
         {new_collections.map((product,P)=>{
            return (
                <Products key={P} id={product.id} 
                name={product.name} 
                image={product.image} 
                new_price={product.new_price} 
                old_price={product.old_price}/>
                ) 
         })}
        </div>
    </div>
  )
}

export default NewCollections