import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
                <Link to={"/restaurent_details/"+r.id}>
                  <div className="card">
                      <img src={r.image}/>
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h6>{r.name}</h6>
                            <div className="badge bg-success">{r.ratings}</div>
                        </div>
                        <p className="text-truncate">{r.description}</p>
                      </div>
                  </div>
                  </Link>
              </div>)}
          </div>}
        </div>
    </> );
}
 
export default RestaurantList;