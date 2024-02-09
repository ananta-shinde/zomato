import Quantity from "./Quantity";

const MenuCard = (props) => {
    return ( <div className="card p-4">
    <div className="row">
        <div className="col-4"> 
           <img className="img-fluid" src={props.dishes.image}/>
        </div>
        <div className="col-6">
            <h5>{props.dishes.name}</h5>
            <p className="text-muted">{props.price}</p>
            <p className="text-muted">{props.dishes.decription}</p>
        </div>
 
        <div className="col-2">
             <Quantity restaurantId={props.restaurantId} menuId={props.menuId}/>
        </div>
        
    </div>
     
</div> );
}
 
export default MenuCard;