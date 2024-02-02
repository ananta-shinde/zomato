import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useState } from 'react';
import RestaurantList from './pages/RestaurantList';
import Restaurant from './pages/Restaurant';

function App() {
  const [user,setUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<h1>cart</h1>}/>
        <Route path='/restaurents/:cityId' element={<RestaurantList/>}/>
        <Route path='/restaurent_details/:restId' element={<Restaurant/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
