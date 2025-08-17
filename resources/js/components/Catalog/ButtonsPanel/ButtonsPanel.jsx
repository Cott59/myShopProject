import { useState } from "react";
import Button from "./Button/Button";
import "./ButtonsPanel.css";


export default function ButtonsPanel(){
    const nameButtons=["Новинки","Ночники","Декор"];
    
    const [activBtn, setActiveBtn] = useState("Новинки")

    return (
        <div className="buttonsPanel" >
            
            {nameButtons.map(item=><Button name={item} key={item.key} isActive={setActiveBtn} activBtn={activBtn}/>)}
        </div>
    )

}

