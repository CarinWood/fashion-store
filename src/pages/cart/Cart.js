import React, {useContext} from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './cart.css'
import { Link } from 'react-router-dom'
import Visa from '../../assets/visa.png';
import Mastercard from '../../assets/mastercard.png';
import American from '../../assets/american.png'
import Paypal from '../../assets/paypal.png';
import { FaShoppingCart, FaRegHeart, FaTrashAlt} from 'react-icons/fa';
import { CartContext } from '../../context/CartContext'
import { WishListContext } from '../../context/WishListContext'

const Cart = () => {

    const [cart, setCart] = useContext(CartContext);
    const [heartList, setHeartList] = useContext(WishListContext);
   
    
    const totalSum = cart.reduce((total, item) => total + item.quantity * item.price, 0);


    const AmountOfProducts = 0;

    function checkOutMsg() {
        alert("We hav successfully withdrawn $ " + totalSum + ' from you bankaccount')
    }

    const removeProd = (product) => {
        setCart(cart.filter((item) => product.title !== item.title ) )
    }

    function clickOnHeart(heartObj) {
        setHeartList([...heartList, {...heartObj}])
        removeProd(heartObj);
    }



    return (
        <div>
            <Navbar/>
          
                <div className='cart-container'>
                        <div className='top-div'>
                           

                            <div className='link-wrapper'>
                                <Link to="/">Continue Shopping</Link>
                                <Link to="/wishlist">Your Wishlist</Link>
                            </div>

                        </div>
                   
                        <div className='bottom-div'>
                        <div className="main">
                        {cart.length === 0 ?<h1 className='cart-heading'>
                        <FaShoppingCart className='my-cart'/> 
                        Your cart is empty </h1> : <></> }
                         {cart.map((cartItem) => (
                             <div className='displayed-product' key={cartItem.id}>
                                 <div className='image-div'>
                                     <img src={cartItem.img} alt={cartItem.title} />
                                 </div>
                                 <div>
                                    <h3 className='cartTitle'>{cartItem.title}</h3>   
                                  
                                   
                                    <div className='quantity-select'>
                                       <div id="leftarr">-</div> 
                                       <p className='quantNum'>{cartItem.quantity}</p>
                                       <div id="rightarr">+</div>  
                                       <p className='cartPrice'>$ {cartItem.price}</p>
                                       <FaTrashAlt id="trashy"onClick={() =>removeProd(cartItem)}/>
                                    </div>

                                    <div className='heart-div'>
                                    <FaRegHeart className='saveheart' onClick={() => clickOnHeart(cartItem)}/>
                                    <p className='save'>Save for later</p>
                                    </div>
                                </div>
                             </div>
                         ))}   
                          
                        </div>

                        <aside>
                            <h1 className='cart-heading2'>Order Summary</h1>

                            <div className='order'>
                                <p className='order-value'>
                                    Order value:
                                    <span>$ {totalSum}</span>
                                </p>

                                <p className='order-value'>
                                    Shipping cost:
                                    <span>$ {cart.length === 0 ? 0 : 14}</span>
                                </p>
                                <div className='black-line'></div>
                                <h3 id="total">
                                    Total:
                                    <span>${cart.length > 0 ? totalSum + 14 : 0}</span>
                                </h3>
                                
                            <button onClick={checkOutMsg} type="submit" className='checkout-btn'>Checkout</button>
                            </div>


                            <div className='payment-methods'>
                                <p className='payment-heading'>We accept</p>
                                <p className='payment-logos'>
                                    <img className='card' src={Visa}></img>
                                    <img className='card' src={Mastercard}></img>
                                    <img className='payment' src={American}></img>
                                    <img className='payment' src={Paypal}></img>
                                </p>
                                <p className='return-policy'>
                                    30-day returns. Read more about our 
                                    <p className='return-underline'> return and refund policy.</p>
                                </p>
                            </div>
                           
                        </aside>
                        </div>
                   
                   
                </div>
            <Footer/>
        </div>
    )
}

export default Cart
