import React from 'react';
import Navbar from '../components/Navbar';
import WomenClothes from '../components/WomenClothes';
import Footer from '../components/footer/Footer';



const Women = () => {
    return (
        <div className='women-container'>
            <Navbar/>
            <WomenClothes/>
            <Footer/>
        </div>
    )
}

export default Women
