import React, {useState} from 'react';
import './favourites.css';
import {FaRegHeart, FaHeart, FaCartPlus} from 'react-icons/fa';


const FavProduct = ({favies}) => {

    const [isRed, setIsRed] = useState(false);

    function clickOnHeart() {
       setIsRed(!isRed)
    }

    function addProduct() {
        alert('added product to Cart')
    }

    return (
        <div id={favies.id} className='fav-container'>
            <img src={favies.img} />
            <div onClick={addProduct} className='img-overlay'>
                <FaCartPlus className='cart-plus'/>
                <p className='addCart'>Add To Cart</p> 
            </div>
           
            <div className='heart-container'>
           
            <h2 onClick={addProduct} className='fav-title'>{favies.title}</h2>
         
            <div className='click-heart' onClick={clickOnHeart}>
            {isRed ? <FaHeart className='heart'/>: <FaRegHeart className='red-heart'/>} 
            </div>
            </div>
            <p className='fav-price'>$ {favies.price}</p>
        </div>
    )
}

export default FavProduct
