import React from 'react'
import "./CatalogItem.css"

export default function CatalogItem({dataItem}){
  
  return (
    <div className='catalog-item'>
        <div className="prodItem_img wrap">
            <img src={dataItem.url} alt="r" />           
        </div>
        <div className="prodItem-data">
            <span>Лампа:{dataItem.name}</span>
            <span>Цена: {dataItem.price} р</span>
            <span>Размер: {dataItem.height}</span>


        </div>
    </div>
  )
}

