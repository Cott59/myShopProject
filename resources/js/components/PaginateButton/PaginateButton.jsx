import "./PaginateButton.css"

export default function PaginateButton({page, name,action}){

function actionBtn(e){
    
    this.action(this.page)
   
}
let active = false;


return (
    <div className={active ? "Paginate-Button active": "Paginate-Button"} onClick={(e)=>{actionBtn(e)}} >
        <span>{name}</span>
    </div>

)

}