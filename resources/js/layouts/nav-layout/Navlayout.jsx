import React from 'react';
//import { FaCartShopping } from "@/react-icons/fa6";
//import { FaCartShopping } from 'react-icons/fa6'
import "./Navlayout.css"

const Navlayout = () => {
  return (
    <div className="navbar">
      <div className="menuItem">
        <span>Главная</span>
      </div>
      <div className="menuItem">
        <span>Каталог</span>
      </div>
      <div className="icons">
        {/* <FaCartShopping /> */}
      </div>
        
    </div>
  )
}

export default Navlayout