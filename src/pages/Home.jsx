import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
           <Link to="/login">Login</Link>
           <Link to="/signup">Signup</Link>
           <Link to="/cart">Cart</Link>
        </>
     );
}
 
export default Home;