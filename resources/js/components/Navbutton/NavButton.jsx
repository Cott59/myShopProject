import React from 'react'
import "./NavButton.css"
import { Link } from 'react-router-dom';

function NavButton({name, path, logo}){

    

    const handleClick = () => {
        window.location.href = '/'+path; // Перенаправление на другую страницу
      };

    return (
            
        <div onClick = {() => handleClick()} >{logo} {name} </div>
        
      );
}

export default NavButton