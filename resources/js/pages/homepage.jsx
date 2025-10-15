import React from 'react';
import "/resources/css/homepage.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Homelayout from "../layouts/home-layout/home-layout";
import Catalog from "./Catalog";
import ProductItem from "./ProductItem"
import Card from "./Card/Card"

import {BrowserRouter, Routes, Route } from 'react-router-dom';

function homepage () {
  
  return (
    
      <div className='homepage'>
        <Header />
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/catalog" element={<Catalog />} />
              <Route path="*" element={<Homelayout />} />
              <Route path="/product" element={<ProductItem />} />
              <Route path="/card" element={<Card />} />
            </Routes>
          </BrowserRouter>          
        </div>        
        <Footer />
      </div>
    
  )
}

export default homepage