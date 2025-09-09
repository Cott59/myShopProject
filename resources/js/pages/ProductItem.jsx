import "./../../../resources/css/ProductItem.css"
import imgRhino from "./../../../public/storage/Носорог-item.png"
import Button from "@/components/Catalog/ButtonsPanel/Button/Button"
import {Fade} from 'react-awesome-reveal'
import {Slide} from 'react-awesome-reveal'

export default function ProductItem({name="Носорог", articul ="002",}){


    return (
        <div className="productItem">  
            <Fade >
                <div className="nameProd">{name}</div>
            </Fade>
            <div className="dataProduct">
                <Slide cascade>
                    <div className="pdodBgr dataItemProd">Артикул: А004 </div>
                    <div className="pdodBgr dataItemProd">Материал: ABS </div>
                    <div className="pdodBgr dataItemProd">Размеры: 15*15*25см </div>
                    <div className=" dataItemProd">
                        <div className="dataText pdodBgr">Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Aliquid ipsum eum nesciunt, earum veritatis cupiditate ut 
                        suscipit amet totam culpa doloremque nobis iste ex pariatur perferendis assumenda, 
                        laboriosam explicabo aspernatur? 
                        </div>
                    </div>
                    <div className="pdodBgr dataItemProd">В наличии: 2шт </div>
                        
                    
                </Slide>

            </div>
            <div className="bgr-prod"></div>
            <div className="img-plane">
                <img src={imgRhino} />
            </div>
            <div className="button-plane">
                <Button name ="B Корзину"/>
            </div>
            
            
        </div>
    )

}