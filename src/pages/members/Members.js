import { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import './members.css'
import Navbar from '../../components/navbar/Navbar'


const Members = () => {
    const [savedUser, setSavedUser] = useState('')

    useEffect(() => {
        setSavedUser(localStorage.getItem("_username"))
    }, [])
    return (
        <div>
            <Navbar/>
            <div className='member-container'>
                <h1 className='welcome'>Welcome {savedUser}!</h1>
                <div className='member-card'>
                    <h1 className="logo">Clothes4You <span className='club'>club</span></h1>
                    <h3 className='membership'>Membership level: <span className='gold'>GOLD</span></h3>
                    <h4>What do you think about your latest purchases?</h4>
                    <p className='review'>Write a review and let others know what your think about your latest purchases</p>
                    <button className='review-btn'>Write Review</button>
                    <div className='circle'>
                        <div className='inner-circle'>
                            <p className='inner-text'>GOLD</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Members
