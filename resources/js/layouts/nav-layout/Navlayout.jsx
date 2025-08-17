import React from 'react';
import { FaCartShopping } from 'react-icons/fa6'
import { FaHouseChimney } from "react-icons/fa6";
import { GrCatalog } from "react-icons/gr";
import "./Navlayout.css"

const Navlayout = () => {



  return (
    <div className="navbar">
      <div className="menu">
          <div className="menuItem" onClick = {(e) => console.log(e)} >
            <FaHouseChimney />
            <span>Главная</span>
          </div>
          <div className="menuItem" onClick = {(e) => console.log(e)}>
            <GrCatalog />
            <span>Каталог</span>
          </div>
      </div>
      <div className="menuItem icons">
        <FaCartShopping />
        <span>2</span>
      </div>
        
    </div>
  )
}

export default Navlayout