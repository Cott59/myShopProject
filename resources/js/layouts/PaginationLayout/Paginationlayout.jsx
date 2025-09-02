import React from 'react'
import PaginateButton from "./../../components/PaginateButton/PaginateButton"
import { useState } from 'react'
import "./Paginationlayout.css"

import { Label } from '@headlessui/react';

const Paginationlayout = ({linkPages}) => {

    const [currentPaga, setCurrentPaga] = useState("1")
    const [incrCurrentPage,setIncrCurrentPage] =useState("")
    const [decrCurrentPage,setDecrCurrentPage] =useState("")
    const maxCounterPages =  linkPages.length-2;   

    function incrPage(num){
        setCurrentPaga(num++)
    }
    function decrPage(num){
        setCurrentPaga(num--)
    }
    console.log(maxCounterPages)
  return (
    <div className="Pagination-layout">
        <div className="btn">
            <PaginateButton page={currentPaga} setCurrentPaga={setCurrentPaga} name={"Назад"} action={decrPage}/>
        </div>
        
        <div className="counter">
            
               


            
            
            <span>{decrCurrentPage}</span>
            <span className ="curPege">{currentPaga}</span>
            <span>{incrCurrentPage}</span>

        </div>
        <div className="btn">       
            <PaginateButton page={currentPaga} setCurrentPaga={setCurrentPaga} name={"Далее"} action={incrPage} />
        </div>

    </div>
    
    
  )
}

export default Paginationlayout