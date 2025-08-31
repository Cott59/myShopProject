import React from 'react'
import PaginateButton from "./../../components/PaginateButton/PaginateButton"
import { useState } from 'react'
import "./Paginationlayout.css"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Paginationlayout = (props) => {

    const [currentPaga, setCurrentPaga] = useState(1)
    const [incrCurrentPage,setIncrCurrentPage] =useState(null)
    const [decrCurrentPage,setDecrCurrentPage] =useState(null)
        
    function incrPage(num){
        setCurrentPaga(num++)
    }
    function decrPage(num){
        setCurrentPaga(num--)
    }

  return (
    <div className="Pagination-layout">
        <div className="btn">
            <PaginateButton page={currentPaga} name={"Назад"} action={decrPage}/>
        </div>
        
        <div className="counter">
            <span>{decrCurrentPage}</span>
            <span className ="curPege">{currentPaga}</span>
            <span>{incrCurrentPage}</span>
        </div>
        <div className="btn">       
            <PaginateButton page={currentPaga} name={"Вперёд"} action={incrPage} />
        </div>

    </div>
    
    
  )
}

export default Paginationlayout