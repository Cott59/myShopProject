import React from 'react'
import {bgdefault} from "/resources/static/index-img.js"; 
import "./home-layout.css";
import Info from "../info-home/infohome-layout"

const homelayout = () => {
  return (
    <div>
        <div className="backgraund">
            <img src={bgdefault} alt="bg" ></img> 
        </div> 
        <Info />
    </div>
  )
}

export default homelayout