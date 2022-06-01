import { useState, useEffect, useContext } from 'react'
import Navbar from '../../components/navbar/Navbar';
import './login.css';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';




const Login = () => {
    const [typedName, setTypedName] = useState('')
    const [typedPassword, setTypedPassword] = useState('')
    const [savedUsername, setSavedUsername] = useState('')
    const [savedPassword, setSavedPassword] = useState('')
    const [user, setUser] = useContext(UserContext)
    

    useEffect(() => {
        setUser(localStorage.getItem("_username"))
        setSavedPassword(localStorage.getItem("_password"))
    }, [])
 

    const navigate = useNavigate()

    function checkUser() {
        if (typedName && typedPassword) {
            if (typedName === user && typedPassword === savedPassword) {
                navigate('/members');
            } else {
                alert('Wrong username or password!')
            }

        } else {
            alert('You need to fill in both fields!')
           
        }
    }





    return (
        <div>
            <Navbar/>
            <div className='login'>
            <div className='login-square'>
                <h2 className='login-header'>SIGN IN</h2>

                <div className='input-group'>
                        <input className='input-field' id="username" type="text" placeholder='username'
                            onChange={((e) => (
                                setTypedName(e.target.value)
                            ))}
                        ></input>
                        <label for="username" className="input-label">Username</label>
                </div>

                <div className='input-group'>
                        <input className='input-field' type="password" placeholder='password' id="username"
                        onChange={(e) =>(
                            setTypedPassword(e.target.value)
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
