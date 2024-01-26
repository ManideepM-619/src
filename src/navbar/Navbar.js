import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

import blackoption from '../components/images/blackoption.png'
import cart_icon from '../components/images/cart_icon.png'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {


  const [menu,setMenu] =useState('shop')
  const {getTotalCartItems}= useContext(ShopContext);
  return (
    <div className='navbar ' >
        <div className='nav-logo'>
            <img src={blackoption} 
            alt=''
            style={{width:'15%', height:'auto'}}
         
            />
        
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}}to='/'>Home</Link>{menu === "home"?<hr/>:<></>}</li>
            {/* <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}}to='/shop'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li> */}
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}}to='/men'>Men</Link>{menu === "men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}}to='/women'>Women</Link>{menu === "women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("askUs")}}><Link style={{textDecoration: 'none'}}to='/askUs'>Ask-Us</Link>{menu === "askUs"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart ml-5'>
           <Link to='/login'><button>Login</button></Link> 

            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'> 
            {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar