import React from 'react';
import  './Footer.css';
import blackoption from '../images/blackoption.png'
 
const Footer = () => {
  return (
<footer className='footer-container'>
  <div className='footer-content'>
    <div className='snitch=info'>
    <img src={blackoption} 
    alt=''
    style={{width:'35%', height:'auto'}}></img>
     <div> <p>
      <i class="fa fa-map-marker" aria-hidden="true"></i>
        Hyderabad, Telangana 500073
      </p></div>
     <div>
     <p>
      <i class="fa fa-phone" aria-hidden="true"></i>
        9876543210
      </p>
     </div>
      <div>
      <p>
      <i class="fa fa-envelope" aria-hidden="true"></i>
        hey@snitch.in
      </p>
      </div>
      
    </div>
    <p>&copy; 2024 Snitch. All rights reserved.</p>
  </div>

</footer>
  );
};
 
export default Footer;