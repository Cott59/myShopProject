import "./../../../resources/css/ProductItem.css"
import imgRhino from "./../../../public/storage/Носорог-item.png"
import Button from "@/components/Catalog/ButtonsPanel/Button/Button"
import {Fade} from 'react-awesome-reveal'
import {Slide} from 'react-awesome-reveal'


export default function ProductItem({name="Носорог", articul ="002",}){


    return (
        <div className="productItem">  
            <div className="bgr-prod">
                <div className="dataProduct">
                    <Slide cascade>
                        <span className="dataItemProd">Артикул: {articul}</span>
                        <span className="dataItemProd">Размер: 20x30x40</span>
                        <span className="dataItemProd">Размер: 20x30x40</span>
                        <span className="dataItemProd">Размер: 20x30x40</span>
                        <span className="dataItemProd">Размер: 20x30x40</span>
                        <span className="dataItemProd">В наличии: 10шт</span>
                    
                    </Slide>

                </div>  
                
            </div> 
                      
             
            <div className="img-plane">
                <img src={imgRhino} />
            </div>
            <div className="card">
                <Button name ="B Корзину"/>
            </div>
            <div className="back">
                <Button name ="Back"/>
            </div>
            <Fade >
                <div className="nameProd">{name}</div>
            </Fade>
            
                <div className="photo-plane">
                
                    <div className="photo-plane-item"></div>
                    <div className="photo-plane-item"></div>
                    <div className="photo-plane-item"></div>
                
                </div>

        </div>
    )

}