import React from 'react'
import "./../components/Catalog/Catalog.css"
import ButtonsPanel from "./../components/Catalog/ButtonsPanel/ButtonsPanel"
import CatalogList from "./../components/CatalogList/CatalogList"
import { useState,useEffect } from "react";
import CatalogItem from '@/components/CatalogItem/CatalogItem';
import { useMemo } from 'react';


const Catalog = () => {

  const [activBtn, setActiveBtn] = useState("Новинки");//активная кнопка   
  //const [oldActivBtn, setOldActiveBtn] = useState("Новинки");//активная кнопка 
  const [numCurrentPaga, setNumCurrentPaga] = useState(1)  
  // let oldActivBtn = "";
  let stringData ="";
  
  useEffect(() => {
    //setOldActiveBtn(activBtn);
    setNumCurrentPaga(1);
    
  },[activBtn]
)



 function  getString(){//формируем строку запроса
    let baseString="https://shop.loc/api/";
    if(activBtn=="Новинки")
    { 
      // let pag;
      // if(activBtn==oldActivBtn){
      //   pag= String(numCurrentPaga);
      //   console.log(oldActivBtn);
      //   console.log("33");
      // }
      // else{
      //   pag='1';        
      //   console.log("22");
      //   console.log(oldActivBtn);
      //   // oldActivBtn="Новинки";
      //   console.log(oldActivBtn);
      // }

      let pag= String(numCurrentPaga)
      
      let prod="products?page=" ;
      
      baseString=baseString+prod+pag;
      stringData=baseString;
       
    }

    if(activBtn=="Свечи")
    {
      // let pag;
      // if(activBtn==oldActivBtn){
      //   pag= String(numCurrentPaga);
      //   console.log(oldActivBtn);
      //   console.log("44");
      // }
      // else{
      //   pag='1';
      //   console.log(oldActivBtn);
      //   // oldActivBtn="Свечи";
      //   console.log(oldActivBtn);
      //   console.log("55");
      // }
      
      let pag= String(numCurrentPaga)
      let prod="candles?page=" ;
      
      baseString=baseString+prod+pag;
      stringData=baseString;
    }
    console.log(stringData);
       
    
};

   getString()
  
  return (
    
      <div className='catalog'>
        <div className="btnPanel">
            <ButtonsPanel activBtn={activBtn} setActiveBtn = {setActiveBtn} />
        </div>
        <div className="catalog-content">
            {/* <CatalogList dataList={dataProducts} linkPages = {dataLink} setNumCurrentPaga={setNumCurrentPaga} /> */}
            <CatalogList stringData={stringData} setNumCurrentPaga={setNumCurrentPaga} numCurrentPaga={numCurrentPaga}/> 
        </div>
    
      </div>
    
  )
}

export default Catalog