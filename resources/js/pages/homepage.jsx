import React from 'react';
import "/resources/css/homepage.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Homelayout from "../layouts/home-layout/home-layout.jsx";
import Catalog from "./Catalog";
import { useState } from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

function homepage () {
  // const [content, setContent] = useState(Catalog);


  
  return (
    
      <div className='homepage'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Homelayout />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </BrowserRouter>

          {/* <div className="container">   
            {content}
          </div> */}
      
        <Footer />
      </div>
    
  )
}

export default homepage