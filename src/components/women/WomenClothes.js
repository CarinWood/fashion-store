import React from 'react';
import Garment from '../Garment';
import './women.css';
import {Clothes} from './WomenData';


const WomenClothes = () => {
    return (
        <div className='women-container'>
            {Clothes.map((item) =>(
                <Garment item={item}/>
            ))}
                
           
        </div>
    )
}

export default WomenClothes
