import React from 'react';
import {Favies} from './data/ProductData';
import FavProduct from './FavProduct';
import './favourites.css';

const FavProducts = () => {
    return (
        <div className='fav-row'>
            {Favies.map((item) => (
                  <FavProduct favies={item} /> 
            ))}
         
        </div>
    )
}

export default FavProducts
