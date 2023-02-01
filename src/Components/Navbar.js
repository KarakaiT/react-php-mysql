import React from "react";
import { Link } from "react-router-dom";
import '../Css/Navbar.css';


const Navbar = () =>{

    return(

        
        <div className="navbar">
            <div className="navbar-left">
                <img src="" alt="Logo" />
            </div>
            <div className="navbar-right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>
                <Link to="/order">Order</Link>
                <Link to="/opinion">Opinion</Link>
            </div>
        </div>
    )
}

export default Navbar;