import React from 'react';
import './newsletter.css';

const Newsletter = () => {

    function sendEmail() {
        alert('Thank you for your subscription!')
    }


    return (
        <div className='news'>
            <h1 className='news-heading'>Newsletter</h1>
            <p className='news-text'>Get weekly updates about your favourite products</p>

            <div>
            <input className='news-input' placeholder="Your email ..." ></input>
            <button onClick={sendEmail} className='send-btn'>Send</button>
            </div>
        </div>
    )
}

export default Newsletter
