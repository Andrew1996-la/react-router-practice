import React from "react";
import iphone from '../../img/iphone.jpeg'

const Iphone = (): JSX.Element => {
    return (
        <div className='Iphone phone'>
            <h2 className='goods-title'>Iphone </h2>
            <div className='goods-img'>
                <img src={iphone} alt="iphone"/>
            </div>
            <div className='goods-price'>Цена: 35000 &#8381;</div>
        </div>
    )
}

export default Iphone