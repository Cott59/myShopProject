import React from 'react'
import "./CatalogItem.css"

export default function CatalogItem({dataItem}){
  


  function onClickHendl(e){
    console.log(dataItem.id)
    localStorage.setItem(dataItem.id, dataItem.id);
     //localStorage.clear();
    
  }

  return (
    <div className='catalog-item'>
        <div className="catalogItem_img wrap">
            <img src={dataItem.url} alt="r" />           
        </div>
        <div className="catalog-item-data">
            <span>Лампа:{dataItem.name}</span>
            <span>Цена: {dataItem.price} р</span>
            <span>Размер: {dataItem.height}</span>
            {/* <span>Размер: {dataItem.id}</span> */}
            <div className="cart" onClick={(e) => onClickHendl(e)} >
                <span>в корзину</span>
            </div>
              
            

        </div>
    </div>
  )
}

