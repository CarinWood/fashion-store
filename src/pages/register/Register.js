import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './register.css';

const Register = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const saveUser = () => {
        console.log(name, lastName, email, username, password, confirm)
        if (name && lastName && email && username && password && confirm) {
                if(password === confirm) {
                    localStorage.setItem("_username", username)
                    localStorage.setItem("_password", password)
                    alert('you are registered!')
                }
        } else {
            alert('You need till fill in all fields!')
        }

    }


    return (
        <div>
            <Navbar/>
            <div className='register-container'>
            <form>
                <h1 className='create-heading'>Create An Account</h1>
               
                    <input type="text" className='field' placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
                    <input type="text" className='field' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}></input>
                    <input type="email" className='field'placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="text" className='field' placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                    <input type="password" className='field'  placeholder='Password'onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="password" className='field'  placeholder='Confirm Password' onChange={(e) => setConfirm(e.target.value)}></input>
               
              
                <p className='privacy-policy'>
                    <input id='checkbox' type="checkbox"></input>
                    By creating an account, I consent to the processing of my personal data in 
                    accordance with the <b>PRIVACY POLICY</b>
                </p>

                <button className='create-btn' type="button" onClick={() => saveUser()}>Create</button>
                </form>
              
            </div>
            <Footer/>
        </div>
       
    )
}

export default Register
