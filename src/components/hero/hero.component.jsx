import React from "react";
import './hero.styles.scss';

const Hero = () => {

    return (
        <header className="wow fadeIn" id="hero" data-wow-delay="0.1s">
            <div id="hero-message" className="animated fadeIn">
                <h1>Welcome To EFIEWURA</h1>
                <p>
                    Akwaaba! Kindly sign up and add to our amazing catalogue of homes ads and accommodation spaces
                </p>
            </div>
            <div id="hero-social-container">
                <div id="hero-social-icons" className="animated fadeIn delay-1s">
                    <a rel="noopener noreferrer" data-placement="bottom" href="https://twitter.com/efiawura"
                       target="_blank">
                        <i className="fa fa-twitter"/>
                    </a>
                    <a rel="noopener noreferrer" data-placement="bottom" href="https://www.facebook.com/Efiewura"
                       target="_blank">
                        <i className="fa fa-facebook-square"/>
                    </a>
                    <a rel="noopener noreferrer" data-placement="bottom" href="https://www.instagram.com/efiawura/"
                       target="_blank">
                        <i className="fa fa-instagram"/>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;