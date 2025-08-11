import React from 'react';
import "/resources/css/homepage.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Homelayout from "../layouts/home-layout/home-layout.jsx";
import Catalog from "../components/Catalog/Catalog";
import { useState } from 'react';

function homepage () {
  const [content, setContent] = useState(Catalog);

  

  return (
    
      <div className='homepage'>
        <Header />
          <div className="container">   
            {content}
          </div>
      
        <Footer />
      </div>
    
  )
}

export default homepage