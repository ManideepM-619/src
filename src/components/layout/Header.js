import React from "react";
import './Header.css'
import snitch from '../images/snitch.png'
import cart_icon from '../images/cart_icon.png'
function Header() {
  return (
    <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
      <div class="container-fluid">
       <img src={snitch} 
       alt=''
       style={{width:'2%', height:'auto'}}
       />
        <a class="navbar-brand" href="/">
          Snitch
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ProductList">
                Shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/askUs">
                Ask-Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item">
              <img src={cart_icon} 
              alt=''
              style={{width:'45%', height:'auto'}}
              />Cart
                <a></a>

              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default Header;
 
  