import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
   const [cities,setCities] = useState([]);
   useEffect(()=>{
      fetch(`http://localhost:7000/cities`)
      .then(res => res.json())
      .then(cities =>{
         setCities(cities);
      })
   },[])
    return ( 
        <>
           {props.user ? <p>{props.user.name}</p> : <><Link to="/login">Login</Link>
           <Link to="/signup">Signup</Link></>}
           <Link to="/cart">Cart</Link>
           <div className="Container">
                <div className="row">
                  {cities.map(c=>(<div className="col-4">
                     <Link className="text-decoration-none" to={`/restaurents/${c.id}`}>
                     <div className="card p-4 text-dark ">
                        {c.Name} Restaurant
                     </div>
                     </Link>
                  </div>))}
                </div>
           </div>
        </>
     );
}
 
export default Home;