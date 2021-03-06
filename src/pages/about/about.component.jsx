import React from "react";
import {Helmet} from "react-helmet";
import './about.styles.scss';
import Header from "../../components/header/header.component";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import ScrollToTop from "../../utils/scroll-to-top";

const AboutPage = () => {

    const url = require("../../assets/img/red-morley-hewitt-rl44UgsiObY-unsplash.jpg");

    return (
        <>
            <Helmet>
                <title>Find Out More About edanra</title>
            </Helmet>
            <ScrollToTop/>
            <Navbar/>
            <Header title="About edanra" imageUrl={url}/>

            <section style={{marginBottom: '100px'}} className="container">
                <div className="row">
                    <div className="col-10 offset-1 col-lg-12 offset-lg-0 about-text animated fadeIn delay-1s">
                        <h2>SERVICES</h2>
                        <p>
                            <span className="teal-head">edanra</span> is an online catalogue of property (houses
                            and rooms) listings in Ghana. It serves as the platform for property (house or room) owners
                            rent out their property; connecting tenants to their next accommodation.
                            Our objective is to make the search for accommodation (houses and rooms) in Ghana as easy
                            and convenient as it goes.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 offset-1 col-lg-12 offset-lg-0 about-text animated fadeIn delay-1s">
                        <h2>HOW THE PLATFORM WORKS</h2>
                        <p>
                            1. If you have a house, hotel or room to rent out, sign up and host your property
                        </p>
                        <p>
                            2. If you are looking for a house or room to rent in Ghana, simply search and get connected.
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default AboutPage;
