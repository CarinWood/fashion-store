import React, { useState } from 'react';
import './slider.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import {images} from './ImageArray';

const Slider = () => {

    const[currImg, setCurrImg] = useState(0);

    function handleClickLeft() {
        currImg > 0 && setCurrImg(currImg - 1);
    }

    function handleClickRight() {
       currImg < images.length-1 && setCurrImg(currImg + 1); 
     
    }


    return (
        <div className='slider'>
            <div onClick={handleClickLeft} className='left-arrow'>
                <FaAngleLeft />
            </div>
                <div className='wrapper'>
                   <div className='image-container' style={{width:`${images[currImg].width}`}}>
                       <img src={images[currImg].img} alt="summer dress"></img>
                   </div>

                   <div className='text-container'>
                        <h2>{images[currImg].title}</h2>
                        <p>
                            {images[currImg].text}
                        </p>
                        <button className='shop-btn'>SHOP NOW</button>
                    </div>
                  
                </div>
              
            <div onClick={handleClickRight} className='right-arrow'>
                <FaAngleRight />
            </div>

        </div>
    )
}

export default Slider
