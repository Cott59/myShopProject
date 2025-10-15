import React from 'react'
import { useEffect } from 'react'; 

const Card = () => {

    //const [dataProducts, setDataProducts] = useState([]);//информация о товарах(артикул, цена, фото и т.д.)
  
    const proId = [];
      useEffect(() => {
        for(let i=0; i<localStorage.length; i++) {
            // proId.push(localStorage.key(i)) ;
            let getString="https://shop.loc/api/product/"+localStorage.key(i);
            const fetchData = async () => {
                const response = await fetch(stringData)
                    .then((response)=>{
                        return response.json();
                    })
                    .then((data)=>{
                        proId.push(data.products.data);
                        console.log(data.products.data);
                    })
              
              };
      
              fetchData();
              }

        }

        // const fetchData = async () => {
        //   const response = await fetch(stringData)
        //       .then((response)=>{
        //           return response.json();
        //       })
        //       .then((data)=>{
        //         proId.push(data.products.data);
                  
        //       })
        
        // };

        // fetchData();
        // }, []



    );

    
    useEffect(() => {
        for(let i=0; i<localStorage.length; i++) {
            proId.push(localStorage.key(i)) ;
            
          }
        
      },[]
    )
    


  return (
    <div>Card</div>
  )
}

export default Card