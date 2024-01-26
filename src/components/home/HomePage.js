import React from 'react';
//import Header from '../layout/Header'
//import {Link} from 'react-router-dom';
 //import Footer from '../layout/Footer';
 //import Navbar from '../../navbar/Navbar';
import './HomePage.css'
import Banner from './Banner';
import Popular from '../popular/Popular';
import NewCollections from '../product/NewCollections';
function HomePage() {
  return (
   <>
     {/* <Navbar/> */}
   <div>
       
     <Banner/>
      <Popular/>
      <NewCollections/>

     </div>
   </>
      // <div>
      //  {/* <h2> Clothing Collection</h2>
      // </div>
      // <Link to="/product">
      //   <button>Shop Now</button>
      // </Link>
      // <div>
      //   <p>Drop Coming Soon!</p>
      // </div> */}
  
  );
};

export default HomePage;