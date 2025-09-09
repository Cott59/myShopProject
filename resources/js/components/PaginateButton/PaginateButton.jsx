import "./PaginateButton.css"

export default function PaginateButton({page,nonActive,i, name,action}){

    
function handleClick(){
    action(page+i);    
}


return (
    <div className={nonActive ? "Paginate-Button ": "Paginate-Button nonActive " } onClick={()=>{ nonActive ? handleClick(): null}} >
        <span>{name}</span>
    </div>

)

}