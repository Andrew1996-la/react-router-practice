import React from "react"
import { NavLink, Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
    return (
        <>
            <h2>Goods: </h2>
            <div className='goods-link-wrapper'>
                <NavLink className='goods-link' to='/goods/Iphone' >Iphone</NavLink>
                <NavLink className='goods-link' to='/goods/Samsung' >Samsung</NavLink>
                <NavLink className='goods-link' to='/goods/LG' >LG</NavLink>
                <NavLink className='goods-link' to='/goods/Honor' >Honor</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Layout