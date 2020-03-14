import React from "react";
import './homepage.styles.scss';
import PropertyItemCollection from "../../components/property-item-collection/property-item-collection.component";


const HomePage = () => {

    return (
        <>
            <header className="wow fadeIn" id="hero" data-wow-delay="0.1s">
                <div id="hero-message" className="animated fadeIn" style={{height: '30vh'}}>
                    <h1>Welcome To EFIEWURA</h1>
                    <p>
                        Akwaaba! Kindly sign up and add to our amazing catalogue of ads homes and accommodation space
                    </p>
                </div>
                <div id="hero-social-container">
                    <div id="hero-social-icons" className="animated fadeIn delay-1s">
                        <a rel="noopener noreferrer" data-placement="bottom" href="https://twitter.com/Efiewura"
                           target="_blank">
                            <i className="fa fa-twitter"/>
                        </a>
                        <a rel="noopener noreferrer" data-placement="bottom" href="https://www.facebook.com/Efiewura"
                           target="_blank">
                            <i className="fa fa-facebook-square"/>
                        </a>
                        <a rel="noopener noreferrer" data-placement="bottom" href="https://www.instagram.com/Efiewura"
                           target="_blank">
                            <i className="fa fa-instagram"/>
                        </a>
                    </div>
                </div>
            </header>


            <section id="how-to-use-container" className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-10 animated fadeIn">
                        <h2>What EFIEWURA Does</h2>
                        <p style={{marginTop: '1.2em'}}>
                            Our platform is a catalogue of accommodation ads that bridges the gap between the average
                            Ghanaian,
                            especially National Service Personnel, and accommodation space providers in all districts
                            and towns of
                            the country.
                        </p>
                    </div>
                    <div className="col-8 offset-2 col-md-2 offset-md-0 col-lg-2 animated fadeIn delay-1s">
                        <img id="ghana-map"
                             src="https://firebasestorage.googleapis.com/v0/b/efiewura-db-60044.appspot.com/o/site-images%2Fgh-green.svg?alt=media&token=92674f0c-7cc1-4f4d-8c06-873422796a76"
                             className="img-fluid"
                             alt="Ghana map"/>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <h2 style={{marginLeft: '10px', marginTop: '70px'}}>Find yourself a home that suits your exact
                        needs</h2>
                </div>
            </div>

            <PropertyItemCollection region="Ashanti"/>
            <PropertyItemCollection region="Bono"/>
            <PropertyItemCollection region="Bono East"/>
            <PropertyItemCollection region="Ahafo"/>
            <PropertyItemCollection region="Central"/>
            <PropertyItemCollection region="Eastern"/>
            <PropertyItemCollection region="Greater Accra"/>
            <PropertyItemCollection region="Northern"/>
            <PropertyItemCollection region="Savannah"/>
            <PropertyItemCollection region="North East"/>
            <PropertyItemCollection region="Upper East"/>
            <PropertyItemCollection region="Upper West"/>
            <PropertyItemCollection region="Oti"/>
            <PropertyItemCollection region="Western"/>
            <PropertyItemCollection region="Western North"/>
            <PropertyItemCollection region="Volta"/>
        </>
    );
};


export default HomePage;
