import "./CatalogList.css"
import Button from "../Catalog/ButtonsPanel/Button/Button"
import React from 'react'
import CatalogItem from "./../CatalogItem/CatalogItem"
import Paginationlayout from "../../layouts/PaginationLayout/Paginationlayout"

export default function CatalogList ({dataList}) {

  console.log(dataList)

  return (

    
    <div className="catalogList">
        <div className="catalog-items-plane">
            {dataList.map((el)=><CatalogItem dataItem={el} />)}
        </div>
        <div className="catalog-pagination-plane">
            <Paginationlayout/>
            {/* <Button name='назад'/>
            . 2 3 4 .
            <Button name='вперёд'/> */}
        </div>


    </div>
  )
}

 