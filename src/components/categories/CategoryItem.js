import React from 'react';
import './categories.css';
import { Link } from 'react-router-dom';

const CategoryItem = ({item}) => {
    return (
        <div className='categories-container'>
            <img src={item.img}/>
            <p>
                <h2 className='cat-title'>{item.title}</h2>
            </p>
          
            <button className='cat-btn'>SHOP NOW</button>
      
        </div>
    )
}

export default CategoryItem
