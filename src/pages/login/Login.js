import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import './login.css';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const userData = {
        userName: 'User',
        password: 'password',
    }

    const navigate = useNavigate()

    function checkUser() {
        if (userData.userName === name && userData.password === password) {
            navigate('/members');
        } else {
            alert('You entered the wrong username and/or password')
           
        }
    }


    return (
        <div>
            <Navbar/>
            <div className='login'>
            <div className='login-square'>
                <h2 className='login-header'>SIGN IN</h2>

                <div className='input-group'>
                        <input className='input-field' id="username" type="text" placeholder=' ' value={name}
                            onChange={((e) => (
                                setName(e.target.value)
                            ))}
                        ></input>
                        <label for="username" className="input-label">Username</label>
                </div>

                <div className='input-group'>
                        <input className='input-field' type="password" placeholder='' id="username" value={password}
                        onChange={(e) =>(
                            setPassword(e.target.value)
                        )}></input>
                        <label for="password" className="input-label">Password</label>
                </div>


                <button id="sign-in-btn" type="submit" onClick={checkUser}>Sign In</button>
                <p className='forgot'>Forgot password?</p>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Login
