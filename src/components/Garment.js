import React from 'react'

const Garment = ({item}) => {
    return (
        <div className='garment-container'>
            <div className='image-container'>
                <img src={item.img}></img>
            </div>

            <div className='text-container'>
            <h3 className='garment-title'>{item.title}</h3>
            <p className='lorem-text'>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Ut quae consequatur quasi magni placeat porro, 
            sunt velit dolorum aspernatur facere, 
            quas sed quisquam sequi repudiandae ducimus eaque maiores exercitationem hic!
            </p>
            <p id="women-price">$ {item.price}</p>

            <section>
                <p id="color">Color:</p>
                <div className='black'></div>
                <div className='blue'></div>
                <div className='red'></div>

                <select id="size">
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>

                <button className='buy-btn'>Add To Cart</button>
            </section>

            </div>
        </div>
    )
}

export default Garment
