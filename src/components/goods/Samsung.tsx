import React from "react";
import samsung from "../../img/samsung.jpeg";

const Samsung = (): JSX.Element => {
    return (
        <div className='Samsung phone'>
            <h2 className='goods-title'>Samsung </h2>
            <div className='goods-img'>
                <img src={samsung} alt="Samsung"/>
            </div>
            <div className='goods-price'>Цена: 30000 &#8381;</div>
        </div>
    )
}

export default Samsung