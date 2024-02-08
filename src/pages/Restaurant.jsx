import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "../components/MenuCard";

const Restaurant = () => {
    const {restId} = useParams();
    const [restaurant,setRestaurant] = useState({});
    const [menus,setMenus] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:7000/restaurants?id=${restId}`)
        .then(res=>res.json())
        .then(rests=> {
            setRestaurant(rests[0]);
                fetch(`http://localhost:7000/menus?_expand=dishes&?restaurantId=${rests[0].id}`)
                .then(res=>res.json())
                .then(menus=> {
                setMenus(menus);
            })
            })
        
        

    },[])
    return (<>
    <div className="container">
    <img className="w-100" height="300px" src={restaurant.image}/>
    <h4 className="mt-4 display-5 fw-bold">{restaurant.name}</h4>
    <p className="badge bg-success">{restaurant.ratings}</p>
    <p>{restaurant.description}</p>
    <p>Location : {restaurant.address}</p>
    <hr></hr>
    <div className="row">
        <div className="col-2"></div>
        <div className="col-6">
            <h4>Menus</h4>
            <div>
                {menus.map(m=>(<MenuCard dishes={m.dishes} price={m.price}/>))}
            </div>
        </div>
    </div>
    </div>
   
    </>  );
}
 
export default Restaurant;