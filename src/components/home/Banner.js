import React from 'react'
import './Banner.css'
import hand_icon from '../images/hand_icon.png'
import arrow from '../images/arrow.png'
import banner_image from '../images/banner_image.png'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-left'>
       <h2>NEW ARRIVALS ONLY</h2>
      <div>
        <div className='hand-icon'>
        <p>new</p>
        <img src={hand_icon} alt=''/>
        </div>
         <p>collections</p>
         <p>for everyone</p> 
      </div>
      <div className='banner-latest-btn'>
      <div>Latest Collection</div>
      <img src={arrow} alt=''></img>
      </div>
      </div>
      <div className='banner-right'> 
        <img src={banner_image} alt=''></img>
      </div>
      
        </div>
   

    
  )
}

export default Banner;