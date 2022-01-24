import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import './wishlist.css'
import { FaRegHeart} from 'react-icons/fa';

const WishList = () => {
    return (
        <div>
            <Navbar/>
            <div className='wishlist-container'>
                <p className='wishlist-heading'>Your Wish-List</p>
                <p className='explanation'> To add an item to your wish-list, click on the heart symbol on the item and it will show up here.</p>
                    <FaRegHeart/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default WishList
