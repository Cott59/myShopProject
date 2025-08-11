import Button from "./Button/Button";
import "./ButtonsPanel.css";

export default function ButtonsPanel(){
    const nameButtons=["Новинки","Ночники"];

    

    return (
        <div className="buttonsPanel" >
            {nameButtons.map(item=><Button name={item} key={item.key} onClick={(item)=><isActive />} />)}
            
        </div>
    )

}