import React from "react";
import './hero.styles.scss';
import {Link} from "react-router-dom";

const Hero = () => {

    return (
        <header className="wow fadeIn" id="hero" data-wow-delay="0.1s">
            <div id="hero-message" className="animated fadeIn">
                <h1>Welcome To edanra!</h1>
                <p>
                    Do you have a house/room to rent out?
                    Sign up and host your property for free!
                </p>
                <div className="get-started">
                    <Link to="/signup">Get started</Link>
                </div>
            </div>
            <div id="hero-social-container">
                <div id="hero-social-icons" className="animated fadeIn delay-1s">
                    <a rel="noopener noreferrer" data-placement="bottom" href="https://twitter.com/edanragh"
                       target="_blank">
                        <i className="fa fa-twitter"/>
                    </a>
                    <a rel="noopener noreferrer" data-placement="bottom" href="https://web.facebook.com/Edanra-105026167849323/"
                       target="_blank">
                        <i className="fa fa-facebook-square"/>
                    </a>
                    <a rel="noopener noreferrer" data-placement="bottom" href="https://www.instagram.com/edanragh"
                       target="_blank">
                        <i className="fa fa-instagram"/>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
