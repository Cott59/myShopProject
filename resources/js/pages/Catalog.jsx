import React from 'react'
import "./../components/Catalog/Catalog.css"
import ButtonsPanel from "./../components/Catalog/ButtonsPanel/ButtonsPanel"
import CatalogList from "./../components/CatalogList/CatalogList"
import { useState } from "react";
import CatalogItem from '@/components/CatalogItem/CatalogItem';

const Catalog = () => {

  const [data, setData] = useState([]);
  
 
  return (
    
      <div className='catalog'>
        <div className="btnPanel">
            <ButtonsPanel setData={setData} />
        </div>
        <div className="catalog-content">
            <CatalogList dataList={data} />
        </div>
    
      </div>
    
  )
}

export default Catalog