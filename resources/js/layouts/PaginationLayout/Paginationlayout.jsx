import React from 'react'
import PaginateButton from "./../../components/PaginateButton/PaginateButton"
import { useState } from 'react'
import "./Paginationlayout.css"

import { Label } from '@headlessui/react';

const Paginationlayout = ({countPages,setNumCurrentPage,numCurrentPage}) => {
        
    const maxCounterPages =  countPages-2;  
        
  return (
    <div className="Pagination-layout">
        <div className="btn">
            {/* <PaginateButton page={currentPaga}  name={"Назад"} action={(num)=>{setCurrentPaga(currentPaga-1)}} /> */}
            <PaginateButton page={numCurrentPage} nonActive={numCurrentPage-1>0}  i={-1} name={"Назад"} action={setNumCurrentPage} />
        </div>
        
        <div className="counter">            
            <span>{numCurrentPage-1<=0 ? "": numCurrentPage-1}</span>
            <span className ="curPege">{numCurrentPage}</span>
            <span>{numCurrentPage+1>maxCounterPages ? "": numCurrentPage+1 }</span>
        </div>
        <div className="btn">       
            {/* <PaginateButton page={currentPaga}  name={"Далее"} action={(num)=>{setCurrentPaga(currentPaga+1)}} /> */}
            <PaginateButton page={numCurrentPage} nonActive={numCurrentPage<maxCounterPages} i={1} name={"Далее"} action={setNumCurrentPage} />
        </div>

    </div>
    
    
  )
}

export default Paginationlayout