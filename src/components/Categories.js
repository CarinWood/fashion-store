import React from 'react';
import './categories.css';
import CategoryItem from './CategoryItem';
import {categories} from './data/Data';

const Categories = () => {
    return (
        <div className='categories'>
            {categories.map((item) =>(
                <CategoryItem item={item}/>
            ))}
        </div>
    )
}

export default Categories
