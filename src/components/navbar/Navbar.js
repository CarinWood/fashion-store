import React, { useState, useContext } from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { Favies } from '../data/ProductData';
import SearchItems from '../search/SearchItems';
import './navbar.css'
import { CartContext } from '../../context/CartContext';


const Navbar = () => {

    const [cart, setCart] = useContext(CartContext)

    const [count, setCount] = useState(0)
    const [theValue, setTheValue] = useState('')
    const [isVisible, setIsVisible] = useState(false)

   const handleOnChange = (e) => {
       setTheValue(e.target.value)     
   }

   const filteredFavies = Favies.filter(Fav => {
       return Fav.title.toLowerCase().includes(theValue.toLowerCase())
   })

   function clickMagnifyer() {
       
    setIsVisible(!isVisible)
   }

   

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
                type="text" placeholder='Search..'
                    onChange={handleOnChange}
                />
                <div className={isVisible ? 'visible drop-down-list' : 'notVisible drop-down-list'}><SearchItems Favies={filteredFavies}/></div>


                <FaSearch className='magnifier' onClick={clickMagnifyer} />
            </section>
                    
                    <div className='logo'>
                        <Link id="link" to="/">
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
                    <FaShoppingCart id="cart"/>
                    <p className='digit'>{cart.reduce((total, product) => total + product.quantity,0)}</p>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Navbar
