import React from "react";
import '../Css/About.css'; 
import AboutImg from '../assest/about.jpg';

const About =()=>{

    return(
        <div className="about">
            <div className="about-left" style={{backgroundImage: `url(${AboutImg})`}}>
                <div className="kep">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
            <div className="about-right">
                <div className="bemutatkozas">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis veritatis inventore nesciunt quos similique, molestiae in, doloribus quasi illum eligendi pariatur fugiat fugit sit at architecto delectus, rerum hic blanditiis! Sequi eaque magni ex cupiditate est suscipit doloremque, exercitationem, odio quis, explicabo quam excepturi aperiam minima repellat rem. Repudiandae?</p>
                </div>
            </div>
        </div>
    )
}

export default About;