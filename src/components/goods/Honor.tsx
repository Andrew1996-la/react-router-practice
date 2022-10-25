import React from "react";
import honor from "../../img/honor.jpeg";

const Honor = (): JSX.Element => {
    return (
        <div className='Honor phone'>
            <h2 className='goods-title'>Honor </h2>
            <div className='goods-img'>
                <img src={honor} alt="Honor"/>
            </div>
            <div className='goods-price'>Цена: 27000 &#8381;</div>
        </div>
    )
}

export default Honor