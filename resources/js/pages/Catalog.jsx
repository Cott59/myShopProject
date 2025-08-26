import React from 'react'
import "./../components/Catalog/Catalog.css"
import ButtonsPanel from "./../components/Catalog/ButtonsPanel/ButtonsPanel"
import CatalogList from "./../components/CatalogList/CatalogList"

const Catalog = () => {
  return (
    <div className='catalog'>
      <div className="btnPanel">
          <ButtonsPanel />
      </div>
      <div className="catalog-content">
          <CatalogList />
      </div>
    
    </div>
  )
}

export default Catalog