import React from "react";
import { Link } from "react-router-dom";
import HeroImg from '../assest/kezdo.jpg';
import '../Css/Home.css';

const Home = () => {

    return(
        <div className="container" style={{backgroundImage: `url(${HeroImg})`}}>

            <div className="text">
                <div className="welcome">
                    <h1>Welcome to the page!</h1>
                </div>
                
                <div className="para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa officiis ipsum nobis porro minima adipisci ex rem, praesentium quis ratione quasi, voluptas possimus illo quibusdam, error alias ad optio vero! Harum ut dolorum consequatur vitae laborum quia, voluptas, atque inventore ducimus, deserunt dolore unde molestias optio earum magnam doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa officiis ipsum nobis porro minima adipisci ex rem, praesentium quis ratione quasi, voluptas possimus illo quibusdam, error alias ad optio vero! Harum ut dolorum consequatur vitae laborum quia, voluptas, atque inventore ducimus, deserunt dolore unde molestias optio earum magnam doloremque.</p>
                </div>

                <div className="button">
                    <Link to="/about" className="btn">About</Link>
                    <Link to="/product" className="btn">Product</Link>
                    <Link to="/opinion" className="btn">Opinion</Link>
                </div>
          
            </div>
        </div>
    )
}

export default Home;