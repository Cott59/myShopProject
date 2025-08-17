import React from 'react'
import "./../components/Catalog/Catalog.css"
import ButtonsPanel from "./../components/Catalog/ButtonsPanel/ButtonsPanel"


const Catalog = () => {
  return (
    <div className='catalog'>
      <div className="btnPanel">
          <ButtonsPanel />
      </div>
      <div className="content">
          
      </div>
    
    </div>
  )
}

export default Catalog