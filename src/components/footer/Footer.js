import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='icons'>
                <FaFacebookF className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagram className='icon'/>
                <FaPinterestP className='icon'/>
                <FaYoutube className='icon'/>
            </div>

            <p className='footer-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Adipisci beatae iure consequuntur architecto obcaecati nesciunt numquam facilis ad repellendus? 
                Explicabo voluptatem voluptates distinctio itaque odit ....
            </p>
                <a className='read-more' href="#">Read More</a>

            <Link className='logo-link' to="/">
            <h2 className='logo'>Clothes4You</h2>
            </Link>

            <p id="copyright">Created and Built by Carin Wood</p>
        </div>
    )
}

export default Footer
