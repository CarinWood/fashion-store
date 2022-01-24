import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './cart.css'
import { Link } from 'react-router-dom'
import Visa from '../../assets/visa.png';
import Mastercard from '../../assets/mastercard.png';
import American from '../../assets/american.png'
import Paypal from '../../assets/paypal.png';
import { FaShoppingCart} from 'react-icons/fa';

const Cart = () => {

    const orderValue = 0;
    const shippingCost = 0;
    const total = 0;
    const AmountOfProducts = 0;



    return (
        <div>
            <Navbar/>
          
                <div className='cart-container'>
                        <div className='top-div'>
                            <h1 className='cart-heading'>Your Cart({AmountOfProducts})</h1>

                            <div className='link-wrapper'>
                                <Link to="/">Continue Shopping</Link>
                                <Link to="/wishlist">Your Wishlist</Link>
                            </div>

                        </div>
                   
                        <div className='bottom-div'>
                        <div className="main">
                        <h1 className='cart-heading'>
                        <FaShoppingCart className='my-cart'/> 
                        Your cart is empty
                            
                        </h1>
                            
                          
                        </div>

                        <aside>
                            <h1 className='cart-heading'>Order Summary</h1>

                            <div className='order'>
                                <p className='order-value'>
                                    Order value:
                                    <span>$ {orderValue}</span>
                                </p>

                                <p className='order-value'>
                                    Shipping cost:
                                    <span>$ {shippingCost}</span>
                                </p>
                                <div className='black-line'></div>
                                <h3 id="total">
                                    Total:
                                    <span>$ {total}</span>
                                </h3>
                                
                            <button type="submit" className='checkout-btn'>Checkout</button>
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
