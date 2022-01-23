import React from 'react';
import Categories from '../components/Categories';
import FavProducts from '../components/FavProducts';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import { useState } from 'react';
import {Favies} from '../components/ProductData';





const Home = () => {

    

    return (
        <div className='container'>
            <Navbar/>
            <Slider/>
            <Categories/>
            <FavProducts/>
            <Newsletter/>
            <Footer/>
         
        </div>
    )
}

export default Home
