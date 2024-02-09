import { useContext } from "react";
import { cartContext } from "../contexts";

const Cart = () => {
    const cartItems = useContext(cartContext);
    return ( <>
    <p>{JSON.stringify(cartItems)}</p>
    </> );
}
 
export default Cart;