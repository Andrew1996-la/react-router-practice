import React from "react";
import Lg from "../../img/Lg.jpeg";

const LG = (): JSX.Element => {
    return (
        <div className='LG phone'>
            <h2 className='goods-title'>LG </h2>
            <div className='goods-img'>
                <img src={Lg} alt="LG"/>
            </div>
            <div className='goods-price'>Цена: 25000 &#8381;</div>
        </div>
    )
}

export default LG