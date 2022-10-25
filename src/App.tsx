import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Exclusive from "./components/Exclusive";
import NotFound from "./components/NotFound";
import Iphone from "./components/goods/Iphone";
import Samsung from "./components/goods/Samsung";
import LG from "./components/goods/LG";
import Honor from "./components/goods/Honor";
import Layout from "./components/Layout";

function App() {

    const [isAuth, setIsAuth] = React.useState<boolean>(false)

    return (
        <div className='App'>
            <header className='Header'>
                <NavLink className='link' to='/'>Home</NavLink>
                <NavLink className='link' to='/goods'>Goods</NavLink>
                <NavLink className='link' to='/exclusive'>Exclusive</NavLink>
                <button onClick={() => setIsAuth(!isAuth)} className='logIn'>{isAuth? 'Logout' : 'Login'}</button>
            </header>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/goods' element={ <Layout /> }>
                    <Route path='/goods/Iphone' element={ <Iphone /> } />
                    <Route path='/goods/Samsung' element={ <Samsung /> } />
                    <Route path='/goods/LG' element={ <LG /> } />
                    <Route path='/goods/Honor' element={ <Honor /> } />
                </Route>
                <Route path='/exclusive' element={ isAuth ? <Exclusive /> : <Navigate to='/' /> }/>
                <Route path='*' element={ <NotFound /> }/>
            </Routes>
        </div>
    );
}

export default App;
