import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { createContext, useState } from 'react';
import RestaurantList from './pages/RestaurantList';
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart';
import { cartContext } from './contexts';

function App() {
  const [user,setUser] = useState();
  const [cart,setCart] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<cartContext.Provider value={cart}><Cart/></cartContext.Provider>}/>
        <Route path='/restaurents/:cityId' element={<RestaurantList/>}/>
        <Route path='/restaurent_details/:restId' element={<cartContext.Provider value={cart}><Restaurant /></cartContext.Provider>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
