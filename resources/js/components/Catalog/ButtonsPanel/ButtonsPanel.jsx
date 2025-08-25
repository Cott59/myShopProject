import { useState, useEffect } from "react";
import Button from "./Button/Button";
import "./ButtonsPanel.css";

const nameButtons=["Новинки","Ночники","Декор"];


export default function ButtonsPanel(){
    
    const [activBtn, setActiveBtn] = useState("Новинки");
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://shop.loc/api/products'); 
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
          
        };
    
        fetchData();
      }, []
    );
    
      //   if (loading) return <div>Loading...</div>;
      //   if (error) return <div>Error: {error.message}</div>;
      // return ( console.log(data));
        
      
    


    return (
        <div className="buttonsPanel" >
            
            {nameButtons.map(item=><Button name={item} key={item.key} isActive={setActiveBtn} activBtn={activBtn}/>)}
        </div>
    )

}

