import React from "react";
import '../Css/Product.css';
import ProductImg from '../assest/product2.jpg';
import { Link } from "react-router-dom";

const Product = () => {

    return(
        <div className="product" >

            <div className="productlist" style={{backgroundImage: `url(${ProductImg})`}}>
                <ul>
                    <li className="kat">Kerámai ajándékok</li>
                        <ul>
                            <Link to="/about"><li>Bögre</li></Link>
                            <Link to="/about"><li>Csempe</li></Link>
                        </ul>
                    <li className="kat">Szövet ajándékok</li>
                        <ul>
                            <Link to="/about"><li>Törölköző</li></Link>
                            <Link to="/about"><li>Kötény</li></Link>
                            <Link to="/about"><li>Polo</li></Link>
                        </ul>
                    <li className="kat">Egyéb ajándékok</li>
                        <ul>
                            <Link to="/about"><li>Telefontok</li></Link>
                            <Link to="/about"><li>Felespohár</li></Link>
                        </ul>
                </ul>
            </div>
            <div className="productshow">

            </div>


        </div>
    )
}

export default Product;