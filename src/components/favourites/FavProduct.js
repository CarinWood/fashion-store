import React, {useState, useContext} from 'react';
import './favourites.css';
import {FaRegHeart, FaHeart, FaCartPlus} from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { WishListContext } from '../../context/WishListContext';


const FavProduct = ({favies}) => {

    const [cart, setCart] = useContext(CartContext)
    const [heartList, setHeartList] = useContext(WishListContext);

    function addProduct(product) {
        alert('Product has been added to your cart!')
        const productExist = cart.find((item) => item.id === product.id)
        if (productExist) {
          setCart(cart.map((item) => item.id === product.id ? 
          {...productExist, quantity: productExist.quantity + 1} : item))
        } else {
          setCart([...cart, {...product, quantity: 1}])
        }
    }

   
 
     
    

    const [isRed, setIsRed] = useState(false);

    function clickOnHeart(product) {
       setIsRed(!isRed)
       setHeartList([...heartList, {...product}])
    }

 

    return (
        <div id={favies.id} className='fav-container'>
            <img src={favies.img} />
            <div onClick={() =>addProduct(favies)} className='img-overlay'>
                <FaCartPlus className='cart-plus'/>
                <p className='addCart'>Add To Cart</p> 
            </div>
           
            <div className='heart-container'>
           
            <h2 onClick={() => addProduct(favies)} className='fav-title'>{favies.title}</h2>
         
            <div className='click-heart' onClick={() => clickOnHeart(favies)}>
            {isRed ? <FaHeart className='heart'/>: <FaRegHeart className='red-heart'/>} 
            </div>
            </div>
            <p className='fav-price'>$ {favies.price}</p>
        </div>
    )
}

export default FavProduct
