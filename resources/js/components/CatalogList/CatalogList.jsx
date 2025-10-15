import "./CatalogList.css"
import Button from "../Catalog/ButtonsPanel/Button/Button"
import React from 'react'
import CatalogItem from "./../CatalogItem/CatalogItem"
import Paginationlayout from "../../layouts/PaginationLayout/Paginationlayout"
import { memo } from "react"
import { useState,useEffect } from "react";


function _CatalogList ({stringData,setNumCurrentPaga,numCurrentPaga}) {  //dataList, linkPages,setNumCurrentPaga

  
  const [dataProducts, setDataProducts] = useState([]);//информация о товарах(артикул, цена, фото и т.д.)
  const [dataLink, setDataLink] = useState([]);//ссылки на страницы при пагинации
  console.log(dataLink.length);
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(stringData)
              .then((response)=>{
                  return response.json();
              })
              .then((data)=>{
                  setDataProducts(data.products.data);
                  setDataLink(data.products.links);
              })
        
        };

        fetchData();
      }, [stringData]
    );
  

  return (

    
    <div className="catalogList">
        <div className="catalog-items-plane">
            {dataProducts.map((el)=><CatalogItem dataItem={el} />)}
        </div>
        <div className="catalog-pagination-plane">
            <Paginationlayout countPages ={dataLink.length} setNumCurrentPaga={setNumCurrentPaga} numCurrentPaga={numCurrentPaga}/>
            
        </div>


    </div>
  )
}

const CatalogList = memo(_CatalogList);
export default CatalogList;


 