import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Product from '../Pages/Product';
import Order from '../Pages/Order';
import Opinion from '../Pages/Opinion';

const FirstRoutes =() =>{

    const location = useLocation();

    return(

        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/opinion" element={<Opinion/>}/>
        </Routes>
    )
}

export default FirstRoutes;