import React from 'react'
import "./../components/Catalog/Catalog.css"
import ButtonsPanel from "./../components/Catalog/ButtonsPanel/ButtonsPanel"
import CatalogList from "./../components/CatalogList/CatalogList"
import { useState,useEffect } from "react";
import CatalogItem from '@/components/CatalogItem/CatalogItem';
import { useMemo } from 'react';


const Catalog = () => {

  const [activBtn, setActiveBtn] = useState("Новинки");//активная кнопка
  //const [dataProducts, setDataProducts] = useState([]);//информация о товарах(артикул, цена, фото и т.д.)
  //const [dataLink, setDataLink] = useState([]);//ссылки на страницы при пагинации
  // const [currentPaga,setCurrentPaga] = useState("https://shop.loc/api/products?page=1");
  //const [numCurrentPaga, setNumCurrentPaga] = useState(1)
  //console.log(numCurrentPaga);
 
  let stringData ="";
  
function getString(){//формируем строку запроса
    let baseString="https://shop.loc/api/";
    if(activBtn=="Новинки")
    {
       let prod="products?page=";
      
       baseString=baseString+prod;//+numCurrentPaga
       stringData=baseString;
       
       
    }
    
    
};

   getString()


  //  ff(stringData);

  //  function ff(stringData){// ПОЛУЧАЕМ ДАННЫЕ
  //     const response =  fetch(stringData)
  //       .then((response)=>{
  //         return response.json();
  //     })
  //     .then((data)=>{
  //       setDataProducts(data.products.data);
  //       setDataLink(data.products.links);
  //     });
  //  }

  


  // function getString(numCurrentPaga){
  //   let baseString="https://shop.loc/api/";
  //   if(activBtn=="Новинки")
  //   {
  //      let prod="products?page=";
      
  //      baseString=baseString+prod+numCurrentPaga;
  //      stringData=baseString;
       
       
  //   }
    
    
  // };

  //  getString(numCurrentPaga)
  
  //  console.log(stringData);
   


    //   useEffect(() => {
    //     const fetchData = async () => {
    //       const response = await fetch(currentPaga)
    //           .then((response)=>{
    //               return response.json();
    //           })
    //           .then((data)=>{
    //               setDataProducts(data.products.data);
    //               setDataLink(data.products.links);
    //           })
        
    //     };

    //     fetchData();
    //   }, []
    // );
  
  
  return (
    
      <div className='catalog'>
        <div className="btnPanel">
            <ButtonsPanel activBtn={activBtn} setActiveBtn = {setActiveBtn} />
        </div>
        <div className="catalog-content">
            {/* <CatalogList dataList={dataProducts} linkPages = {dataLink} setNumCurrentPaga={setNumCurrentPaga} /> */}
            <CatalogList stringData={stringData} /> 
        </div>
    
      </div>
    
  )
}

export default Catalog