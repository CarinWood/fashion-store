import React from 'react';
import Categories from '../components/categories/Categories';
import FavProducts from '../components/favourites/FavProducts';
import Navbar from '../components/navbar/Navbar'
import Newsletter from '../components/newsletter/Newsletter';
import Slider from '../components/slider/Slider';
import Footer from '../components/footer/Footer';
import { useState } from 'react';
import {Favies} from '../components/data/ProductData';
import './home.css';





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
