import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './wishlist.css'
import { FaRegHeart, FaTrashAlt, FaShoppingCart} from 'react-icons/fa';
import { WishListContext } from '../../context/WishListContext';
import {useContext} from 'react'


const WishList = () => {

    const [heartList, setHeartList] = useContext(WishListContext)


    function removeFromWishlist(product) {
        setHeartList(heartList.filter((item) => product.title !== item.title ) )
    }



    return (
        <div>
            <Navbar/>
          
            <div className='wishlist-container'>
            <p className='wishlist-heading'>Your Wish-List</p>
                
                {heartList == 0 ?  
                <><p className='explanation'> To add an item to your wish-list, click on the heart symbol on the item and it will show up here.</p>   <FaRegHeart className='hearticon'/></>
              : <></>}
                  
                    <div className='wishWrap'>
                    {heartList.map((item) => (
                        <div className="wish-list-container">
                            <div className="wish-img-div">
                                <img src={item.img} alt={item.title} />
                            </div>
                                <h2 className='wish-title'>{item.title}</h2>
                                <h3>$ {item.price}</h3>
                                <div className='trashcan-icon-div' onClick={() => removeFromWishlist(item)}><FaTrashAlt/></div>
                                <button type="button" className='add-wish-btn'><FaShoppingCart className='cart-button-icon'/> Add to Cart</button>
                        </div>
                    ))}
                    </div>
            </div>
         
            <Footer/>
        </div>
    )
}

export default WishList
