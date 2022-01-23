import './App.css';
import Home from './pages/Home';
import { Routes, Route} from 'react-router-dom';
import Women from './pages/Women';
import Accessories from './pages/Accessories';
import Men from './pages/Men';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import Members from './pages/Members';



function App() {
  return (
    <>
    <Routes>
     
      <Route path="/" element={<Home/>}></Route>
      <Route path="/women" element={<Women/>}></Route>
      <Route path="/accessories" element={<Accessories/>}></Route>
      <Route path="/men" element={<Men/>}></Route>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/members" element={<Members/>} />
   

    </Routes>
    
    </>
  );
}

export default App;
