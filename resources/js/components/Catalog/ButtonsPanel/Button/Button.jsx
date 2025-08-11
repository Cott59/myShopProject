import React from 'react';
import { useRef } from 'react';
import "./Button.css";


export default function Button({isActive, name='кнопка'}){
    
  return (
    <div>
        {
            isActive ?
            (
                <div className='button active'>
                    <span>{name}</span>
                </div>
            )
            :
            (
                <div className='button'>
                     <span>{name}</span>
               </div>
            )


        }
    </div>

    
    
  )
}

 