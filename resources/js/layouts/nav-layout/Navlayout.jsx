import React from 'react';
import { FaCartShopping } from 'react-icons/fa6'
import { FaHouseChimney } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";
import { GrCatalog } from "react-icons/gr";
import "./Navlayout.css"

import NavButton from '../../components/Navbutton/NavButton';


const Navlayout = () => {

  const handleClick = (str="") => {
    window.location.href = '/'+str; // Перенаправление на другую страницу
  };

  return (
    <div className="navbar">

      <div className="menu">
          <div className="menuItem" onClick = {() => handleClick('home')} >
            <FaHouseChimney />
            <span>Главная</span>
          </div>
          <div className="menuItem" onClick = {() =>handleClick('catalog') }>
            <GrCatalog />
            <div>Каталог</div>
          </div>
          <div className="menuItem" >            
            <NavButton name= 'Контакты' path='product' logo={<RiContactsBookLine />}/>
            <div>Контакты</div>
          </div>          
      </div>

      <div className="menuItem navbar-card " onClick = {() =>handleClick('card') } >        
          <FaCartShopping />
          <span className="count">{localStorage.length}</span>
      </div>
      
        
    </div>
  )
}

export default Navlayout