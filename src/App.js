import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<h1>Login</h1>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<h1>cart</h1>}/>
        <Route path='/restaurent' element={<h1>cart</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
