import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Restaurant = () => {
    const {restId} = useParams();
    const [restaurant,setRestaurant] = useState({});
    const [menus,setMenus] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:7000/restaurants?id=${restId}`)
        .then(res=>res.json())
        .then(rests=> {
            setRestaurant(rests[0]);
            for(var i=0;i<rests[0].dishes.length;i++){
                fetch(`http://localhost:7000/dishes?id=${rests[0].dishes[i]}`)
                .then(res=>res.json())
                .then(dishes=>{
                    setMenus([...menus,dishes[0]])
                })
            }
        })

        

    },[])
    return (<>

    <h4>{restaurant.name}</h4>
    <p>{JSON.stringify(menus)}</p>
    </>  );
}
 
export default Restaurant;