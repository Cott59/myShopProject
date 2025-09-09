import { useState, useEffect } from "react";
import Button from "./Button/Button";
import "./ButtonsPanel.css";

const nameButtons=["Новинки","Лампы", "Панно"];


export default function ButtonsPanel({activBtn,setActiveBtn}){
    
    // const [activBtn, setActiveBtn] = useState("Новинки");
    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("https://shop.loc/api/products?page=1")
    //             .then((response)=>{
    //                 return response.json();
    //             })
    //             .then((data)=>{
    //                 setData(data.products.data);
    //                 setMetaData(data.products.links);
    //             })
    //         // const jsonData = await response.json();
    //         // //console.log(jsonData)
    //         // setData(jsonData);
            
    //     };
    
    //     fetchData();
    //   }, []
    // );
    
      //   if (loading) return <div>Loading...</div>;
      //   if (error) return <div>Error: {error.message}</div>;
      // return ( console.log(data));
        
      
    


    return (
        <div className="buttonsPanel" >
            
            {nameButtons.map(item=><Button name={item} key={item.key} isActive={setActiveBtn} activBtn={activBtn}/>)}
        </div>
    )

}

