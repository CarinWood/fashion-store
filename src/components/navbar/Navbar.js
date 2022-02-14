import React, { useState, useContext } from 'react';
import { FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Favies } from '../data/ProductData';
import './navbar.css'
import { CartContext } from '../../context/CartContext';


const Navbar = () => {

    const [cart, setCart] = useContext(CartContext)

    const [count, setCount] = useState(0)
    const [theValue, setTheValue] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const hamburgerClick = () => {
        setShowMenu(!showMenu);
    }

   const handleOnChange = (e) => {
       setTheValue(e.target.value) 
         
   }

   function clear() {
       setTheValue('')
   }

   const displayResults = theValue.length > 0

   const filteredFavies = Favies.filter(Fav => {
       return Fav.title.toLowerCase().includes(theValue.toLowerCase())
   })

  
   

    return (
        <div className='navbar'>
            <section className='deal'>Super Deal! Free shipping on orders over $50</section>
           
           <div className='nav-content'>

            <section className='navbar-left'>
                <select className='language'>
                        <option value="En">En</option>
                        <option value="Sv">Sv</option>
                        <option value="De">De</option>
                </select>

                <input 
                className='searchbar' 
                type="text" 
                value={theValue}
                placeholder='Search..'
                onChange={handleOnChange}
                />
                <div onClick={clear} className={displayResults ? 'visible drop-down-list' : 'notVisible drop-down-list'}>
                    <ul> 
                        {filteredFavies.map((fav) => (
                          <div className='search-div'   onClick={clear}>
      
                          <a 
                         
                          className='search-title' 
                          href={fav.anchor}>
                              <h1>{fav.title}</h1>
                         </a>
                       
                      </div>
                        ))} 

                    </ul>                    
                    </div>


        
            </section>
                    
                    <div className='logo-name'>
                        <Link to="/" className='logo-link'>
                        Clothes4You
                        </Link>
                    </div>

                <section className='navbar-right'>

                    <Link to="/wishlist">
                        <FaRegHeart className='wishlist'/>
                    </Link>

                    <Link id="register-link" to="/register">
                        <p className='register'>Register</p>
                    </Link>

                    <Link id="login" to="/login">
                        <p className='signin'>Sign In</p>
                    </Link>

                    
                            <Link to="/cart">
                    <Link to="/cart">
                    <FaShoppingCart id="cart"/>
                    <p className='digit'>{cart.reduce((total, product) => total + product.quantity,0)}</p>
                    </Link>
                    </Link>
                </section>
            </div>

                
                <div className='hamburger-nav'>
                    <div className={showMenu? "change-menu": 'menu'} onClick={hamburgerClick}>
                        <div className={showMenu ? "change1": "bar1"}></div>
                        <div className={showMenu ? "change2": "bar2"}></div>
                        <div className={showMenu ? "change3": "bar3"}></div>
                    </div>
                </div>
                <div className={showMenu ?  'menu-bg' : 'hidden-menu'}></div>
                <ul className={showMenu ? "responsive-menu show-responsive" : "responsive-menu"}>
                    <Link to="/register" className='theLink'><li className='list'>Register</li></Link>
                    <Link to="/login" className='theLink'><li className='list'>Sign In</li></Link>
                    <Link to="/cart" className='theLink'><li className='list'>Cart</li></Link>
                    <Link to="/wishlist" className='theLink'><li className='list'>Favourites</li></Link>
                </ul>


        </div>

    )
}

export default Navbar
