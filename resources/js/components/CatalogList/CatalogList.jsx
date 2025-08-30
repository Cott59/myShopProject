import "./CatalogList.css"
import Button from "../Catalog/ButtonsPanel/Button/Button"
import React from 'react'
import CatalogItem from "./../CatalogItem/CatalogItem"

export default function CatalogList ({dataList}) {

  console.log(dataList)

  return (

    
    <div className="catalogList">
        <div className="catalog-items-plane">
            {dataList.map((el)=><CatalogItem dataItem={el} />)}
        </div>
        <div className="catalog-pagination-plane">
            <Button name='назад'/>
            1 2 3
            <Button name='вперёд'/>
        </div>


    </div>
  )
}

 