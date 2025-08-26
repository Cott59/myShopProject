import "./CatalogList.css"
import Button from "../Catalog/ButtonsPanel/Button/Button"
import React from 'react'
import CatalogItem from "./../CatalogItem/CatalogItem"

export default function CatalogList ({list}) {

  return (
    <div className="catalogList">
        <div className="catalog-items-plane">
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />

        </div>
        <div className="catalog-pagination-plane">
            <Button name='назад'/>
            1 2 3
            <Button name='вперёд'/>
        </div>


    </div>
  )
}

 