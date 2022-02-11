import React, {useState, useContext} from 'react';
import './favourites.css';
import {FaRegHeart, FaHeart, FaCartPlus} from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { WishListContext } from '../../context/WishListContext';


const FavProduct = ({favies}) => {

    
    const [isRed, setIsRed] = useState(false);

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
    


    function clickOnHeart(product) {
        if(!isRed) {
            setIsRed(true)
            setHeartList([...heartList, {...product}])
           
        } else {
            setIsRed(false)
            setHeartList(heartList.filter((item) => product.title !== item.title ) )
        }
    }

 

    return (
        <div id={favies.id} className='fav-container'>
            <img src={favies.img} />
            <div onClick={() =>addProduct(favies)} className='img-overlay'>
                <FaCartPlus className='cart-plus'/>
                <p className='addCart'>Add To Cart</p> 
            </div>
           
            <div className='heart-container'>
            <div className='btn-div'>
            <h2 onClick={() => addProduct(favies)} className='fav-title'>{favies.title}</h2>
         
            <div className='click-heart' onClick={() => clickOnHeart(favies)}>
            {heartList.find((item) => item.id == favies.id) ? <FaHeart className='heart'/>: <FaRegHeart className='red-heart'/>} 
            </div>
         
            
            <p className='fav-price'>$ {favies.price}</p>
            </div>
            </div>
        </div>
    )
}

export default FavProduct
