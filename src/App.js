import Home from './pages/Home';
import { Routes, Route} from 'react-router-dom';
import Women from './pages/Women';
import Accessories from './pages/Accessories';
import Men from './pages/Men';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';
import WishList from './pages/wishlist/WishList';
import Members from './pages/members/Members';
import { CartProvider } from './context/CartContext';
import WishListProvider from './context/WishListContext';
import { UserProvider } from './context/UserContext';



function App() {
  return (
    <>
    <UserProvider>
    <CartProvider>
      <WishListProvider>
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
        </WishListProvider>
    </CartProvider>
    </UserProvider>
    
    </>
  );
}

export default App;
