import React from 'react';
import { useRef } from 'react';
import "./Button.css";

export default function Button({name, isActive, activBtn}){

    const thisname = name;

    function active(){
        if(activBtn==thisname){
            return true;
        }
       
    }

    function onClickBtn(e){
        isActive(e.target.textContent)
    }

    return (
        <div>
            <div className={active() ? 'button active' : 'button' } onClick = {(e) => onClickBtn(e)} >
                {name}
            </div>
        </div>
      )


}

