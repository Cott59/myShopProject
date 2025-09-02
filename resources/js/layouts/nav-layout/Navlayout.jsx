import React from 'react';
import { FaCartShopping } from 'react-icons/fa6'
import { FaHouseChimney } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";
import { GrCatalog } from "react-icons/gr";
import "./Navlayout.css"
import { Link } from 'react-router-dom';
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