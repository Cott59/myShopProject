import React from 'react';
import  "./Header.css";
import {logo} from "/resources/static/index-img.js"; 
import Navlayout from "/resources/js/layouts/nav-layout/Navlayout"

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="lg" ></img> 
        <span className='nameBrand'>WoodenHorse </span>
        
      </div>  
      
      <div className="navpanel">
        <Navlayout />
      </div>
    </div>
  )
}

export default Header