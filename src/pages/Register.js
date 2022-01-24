import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Navbar';
import './register.css';

const Register = () => {
    return (
        <div>
            <Navbar/>
            <div className='register-container'>
            <form>
                <h1 className='create-heading'>Create An Account</h1>
               
                    <input className='field' placeholder='Name'></input>
                    <input className='field' placeholder='Last Name'></input>
                    <input className='field'placeholder='Email'></input>
                    <input className='field' placeholder='Username'></input>
                    <input className='field' type="password" placeholder='Password'></input>
                    <input className='field' type="password" placeholder='Confirm Password'></input>
               
              
                <p className='privacy-policy'>
                    <input id='checkbox' type="checkbox"></input>
                    By creating an account, I consent to the processing of my personal data in 
                    accordance with the <b>PRIVACY POLICY</b>
                </p>

                <button className='create-btn'>Create</button>
                </form>
              
            </div>
            <Footer/>
        </div>
       
    )
}

export default Register
