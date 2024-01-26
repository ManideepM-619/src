import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import HomePage from './components/home/HomePage';
//import Men from './components/pages/Men';
//import Women from './components/pages/Women';
import AskUs from './components/askUs/AskUs';
//import Products from './components/product/Products';
import Cart from './components/cart/Cart';
import ShopCategory from './components/pages/ShopCategory';
import banner_men from './components/images/banner_men.png'
import banner_women from './components/images/banner_women.png'
import Navbar from './navbar/Navbar';
import ProductDetails from './components/product/ProductDetails';
import Footer from './components/layout/Footer';


const App = () => {
  return (
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
   
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup></Signup>}/>
    <Route path="/men" element={<ShopCategory banner={banner_men} category='men'/>}/>
    <Route path="/women" element={<ShopCategory banner={banner_women} category='women'/>}/>
    <Route path="/askUs" element={<AskUs/>}/>
    {/* <Route path="/shop" element={<Products/>}/> */}
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/productdetails' element={<ProductDetails/>}>
      <Route path=':productId' element={<ProductDetails/>}/>
    </Route>
   
    </Routes>
    <Footer/>

   </BrowserRouter>
  );
};

export default App;
