import "./../../../resources/css/ProductItem.css"
import imgRhino from "./../../../public/storage/Носорог-item.png"
import Button from "@/components/Catalog/ButtonsPanel/Button/Button"


export default function ProductItem({name="Носорог", articul ="002",}){


    return (
        <div className="productItem">            
            <div className="bgr-prod">
                <span>{name}</span>
                <span>{articul}</span>
                <span>Стоимость:{articul}</span>
                <span>{articul}</span>
                <span>{articul}</span>
                <span>{articul}</span>
                <span>{articul}</span>
            </div>
            <div className="img-plane">
                <img src={imgRhino} />
            </div>
            <div className="button-plane">
                <Button name ="В Корзину"/>
            </div>
            
            
        </div>
    )

}