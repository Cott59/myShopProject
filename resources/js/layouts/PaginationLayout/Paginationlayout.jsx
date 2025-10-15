import React from 'react'
import PaginateButton from "./../../components/PaginateButton/PaginateButton"
import { useState } from 'react'
import "./Paginationlayout.css"

import { Label } from '@headlessui/react';

const Paginationlayout = ({countPages,setNumCurrentPaga,numCurrentPaga}) => {

    const [currentPaga, setCurrentPaga] = useState(numCurrentPaga)
    
    const maxCounterPages =  countPages-2;  
    setNumCurrentPaga(currentPaga);
    
  return (
    <div className="Pagination-layout">
        <div className="btn">
            {/* <PaginateButton page={currentPaga}  name={"Назад"} action={(num)=>{setCurrentPaga(currentPaga-1)}} /> */}
            <PaginateButton page={currentPaga} nonActive={currentPaga-1>0}  i={-1} name={"Назад"} action={setCurrentPaga} />
        </div>
        
        <div className="counter">            
            <span>{currentPaga-1<=0 ? "": currentPaga-1}</span>
            <span className ="curPege">{numCurrentPaga}</span>
            <span>{currentPaga+1>maxCounterPages ? "": currentPaga+1 }</span>
        </div>
        <div className="btn">       
            {/* <PaginateButton page={currentPaga}  name={"Далее"} action={(num)=>{setCurrentPaga(currentPaga+1)}} /> */}
            <PaginateButton page={currentPaga} nonActive={currentPaga<maxCounterPages} i={1} name={"Далее"} action={setCurrentPaga} />
        </div>

    </div>
    
    
  )
}

export default Paginationlayout