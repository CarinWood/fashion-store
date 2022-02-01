import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './wishlist.css'
import { FaRegHeart} from 'react-icons/fa';
import { WishListContext } from '../../context/WishListContext';
import {useContext} from 'react'

const WishList = () => {

    const [heartList, setHeartList] = useContext(WishListContext)
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <p className='wishlist-heading'>Your Wish-List</p>
                
                {heartList == 0 ?  
                <p className='explanation'> To add an item to your wish-list, click on the heart symbol on the item and it will show up here.</p>
                : <></>}
                    <FaRegHeart/>
                    {heartList.map((item) => (
                        <div className="wish-list-container">
                            <div className="wish-img-div">
                                <img src={item.img} alt={item.title} />
                            </div>
                                {item.title}
                        </div>
                    ))}
            </div>
         
            <Footer/>
        </div>
    )
}

export default WishList
