import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantList = () => {
    const [restaurants,setRestaurants] = useState([])
    const {cityId} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:7000/restaurants?cityId=${cityId}`)
        .then(res=>res.json())
        .then(restaurants => {
            setRestaurants(restaurants)
        })
    },[])
    return ( <>
        <div className="container">
            { !restaurants.length ?
             <h4 className="text-center text-muted">No restaurant found</h4> :
             <div className="row">
             {restaurants.map(r => <div className="col-3">
                  <div className="card">
                      {r.name}
                  </div>
              </div>)}
          </div>}
        </div>
    </> );
}
 
export default RestaurantList;