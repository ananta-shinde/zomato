import { useContext, useState } from "react";
import { cartContext } from "../contexts";

const Quantity = (props) => {
    const [qty,setQty] = useState(0);
    const cartState = useContext(cartContext);
    const addItemTocart = ()=>{
        setQty(qty+1)
        cartState.setCart({
            restaurantId : props.restaurantId,
            menuId : props.menuId,
            qty : qty,
        })
    }
    const removeItemFromcart = ()=>{
       if(qty > 0)
       {
         setQty(qty-1)
         console.log({
            restaurantId : props.restaurantId,
            menuId : props.menuId,
            qty : qty,
        })
       }
        
    }
    return ( 
        <div className="d-flex h-25">
        <button className="btn btn-sm btn-danger" onClick={addItemTocart}>+</button>
             <p className="p-2">{qty}</p>
             <button className="btn btn-sm btn-danger" onClick={removeItemFromcart}>-</button>
        </div>
     );
}
 
export default Quantity;