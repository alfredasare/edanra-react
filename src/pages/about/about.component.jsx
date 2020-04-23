import React from "react";
import {Helmet} from "react-helmet";
import './about.styles.scss';
import Header from "../../components/header/header.component";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";

const AboutPage = () => {

    const url = "https://firebasestorage.googleapis.com/v0/b/efiewura-db-60044.appspot.com/o/site-images%2F20-cover.jpg?alt=media&token=cad7f750-9a2e-48b5-85c6-30951f26b27e";

    return (
        <>
            <Helmet>
                <title>Find Out More About edanra</title>
            </Helmet>
            <Navbar/>
            <Header title="About edanra" imageUrl={url}/>

            <section style={{marginBottom: '100px'}} className="container">
                <div className="row">
                    <div className="col-10 offset-1 col-lg-12 offset-lg-0 about-text animated fadeIn delay-1s">
                        <h2>SERVICES</h2>
                        <p>
                            edanra is an online catalogue of property (houses and rooms) listings in Ghana. It serves as
                            the platform for property (house or room) owners to sell or rent their property; connecting
                            buyers and tenants to their next accommodation.
                            Our objective is to make the search for accommodation (houses and rooms) in Ghana as easy
                            and convenient as it goes.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 offset-1 col-lg-12 offset-lg-0 about-text animated fadeIn delay-1s">
                        <h2>HOW THE PLATFORM WORKS</h2>
                        <p>
                            1. If you have a house, hotel or room to host (for rent or sale), sign up and host your
                            property for free
                        </p>
                        <p>
                            2. If you are looking for a house or room to buy or rent in Ghana, simply search and get
                            connected.
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default AboutPage;
