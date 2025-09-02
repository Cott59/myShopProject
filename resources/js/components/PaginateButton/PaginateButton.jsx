import "./PaginateButton.css"

export default function PaginateButton({page, name,action,setCurrentPaga}){

 const gg = action;   
function actionBtn(){
    action(page);
    
   
}
let active = false;


return (
    <div className={active ? "Paginate-Button active": "Paginate-Button"} onClick={()=>{actionBtn()}} >
        <span>{name}</span>
    </div>

)

}