import React from "react";
import './homepage.styles.scss';

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
                        <a rel="tooltip" data-placement="bottom" href="https://twitter.com/Efiewura"
                           target="_blank"
                           data-original-title="Follow us on Twitter">
                            <i className="fa fa-twitter"/>
                        </a>
                        <a rel="tooltip" data-placement="bottom" href="https://www.facebook.com/Efiewura"
                           target="_blank"
                           data-original-title="Like us on Facebook">
                            <i className="fa fa-facebook-square"/>
                        </a>
                        <a rel="tooltip" data-placement="bottom" href="https://www.instagram.com/Efiewura"
                           target="_blank"
                           data-original-title="Follow us on Instagram">
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
                             src="https://firebasestorage.googleapis.com/v0/b/efiewura-db.appspot.com/o/site_images%2Fgh-green.svg?alt=media&token=5d0daad4-13fa-498e-89fd-2afe038f7eeb"
                             className="img-fluid"
                             alt="Ghana map"/>
                    </div>
                </div>
            </section>

            {/*Ashanti*/}
            <div style={{marginTop: '100px'}} className="container-fluid">
                <div className="row">
                    <div className="workspace-head-wrapper" style={{marginBottom: '20px'}}>
                        <h2>Find yourself a home that suits your exact needs</h2>
                        <h2 className="workspace-head"><span className="first-word">Homes</span> in Ashanti Region</h2>
                    </div>
                    <div className="owl-carousel owl-theme">
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/22.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Tema, Comm 19 &#9679; Greater Accra</div>
                                <div className="item-name">Amoah House</div>
                                <div className="item-price">Ghc 2500 &#9679; <span
                                    className="negotiation-status">Negotiable</span></div>
                                <a className="workspace-link" href="#">View Efie</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Ashanti END*/}


            {/*Brong-Ahafo Region*/}
            <div style={{marginTop: '100px'}} className="container-fluid">
                <div className="row">
                    <div className="workspace-head-wrapper" style={{marginBottom: '20px'}}>
                        <h2 className="workspace-head"><span className="first-word">Homes</span> in Brong-Ahafo Region
                        </h2>
                    </div>
                    <div className="owl-carousel owl-theme">
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/1.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Kumasi, Adum &#9679; Ashanti</div>
                                <div className="item-name">Bonsu House</div>
                                <div className="item-price">Ghc 55 &#9679; <span
                                    className="negotiation-status">Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Brong-Ahafo END*/}


            {/*Central Region*/}
            <div style={{marginTop: '100px'}} className="container-fluid">
                <div className="row">
                    <div className="workspace-head-wrapper" style={{marginBottom: '20px'}}>
                        <h2 className="workspace-head"><span className="first-word">Homes</span> in Central Region</h2>
                    </div>
                    <div className="owl-carousel owl-theme">
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/15.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Kumasi, Gate &#9679; Ashanti</div>
                                <div className="item-name">Odenkey's Residence</div>
                                <div className="item-price">Ghc 60 &#9679; <span
                                    className="negotiation-status">Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/11.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Tema, Comm 19 &#9679; Greater Accra</div>
                                <div className="item-name">Amoah House</div>
                                <div className="item-price">Ghc 2500 &#9679; <span
                                    className="negotiation-status">Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Central END*/}


            {/*Eastern Region*/}
            <div style={{marginTop: '100px'}} className="container-fluid">
                <div className="row">
                    <div className="workspace-head-wrapper" style={{marginBottom: '20px'}}>
                        <h2 className="workspace-head"><span className="first-word">Homes</span> in Eastern Region</h2>
                    </div>
                    <div className="owl-carousel owl-theme">
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/7.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Paraku Estate &#9679; Ashanti</div>
                                <div className="item-name">Abena's Residence</div>
                                <div className="item-price">Ghc 6500&#9679; <span
                                    className="negotiation-status">Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Eastern END*/}


            {/*Greater Accra Region*/}
            <div style={{marginTop: '100px'}} className="container-fluid">
                <div className="row">
                    <div className="workspace-head-wrapper" style={{marginBottom: '20px'}}>
                        <h2 className="workspace-head"><span className="first-word">Homes</span> in Greater Accra Region
                        </h2>
                    </div>
                    <div className="owl-carousel owl-theme">
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/20.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Tema, Comm 19 &#9679; Greater Accra</div>
                                <div className="item-name">Amoah House</div>
                                <div className="item-price">Ghc 45000 &#9679; <span
                                    className="negotiation-status">Non-Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>

                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/1.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Kumasi, Adum &#9679; Ashanti</div>
                                <div className="item-name">Bonsu House</div>
                                <div className="item-price">Ghc 55 &#9679; <span
                                    className="negotiation-status">Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/2.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Kumasi, Gate &#9679; Ashanti</div>
                                <div className="item-name">Odenkey's Residence</div>
                                <div className="item-price">Ghc 60 &#9679; <span
                                    className="negotiation-status">Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/4.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Paraku Estate &#9679; Ashanti</div>
                                <div className="item-name">Abena's Residence</div>
                                <div className="item-price">Ghc 65000 &#9679; <span
                                    className="negotiation-status">Non-Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/3.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Grader Estate &#9679; Greater Accra</div>
                                <div className="item-name">Nana's Residence</div>
                                <div className="item-price">Ghc 15000 &#9679; <span
                                    className="negotiation-status">Non-Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Greater Accra END*/}


            {/*Northern Region*/}
            <div style={{marginTop: '100px'}} className="container-fluid">
                <div className="row">
                    <div className="workspace-head-wrapper" style={{marginBottom: '20px'}}>
                        <h2 className="workspace-head"><span className="first-word">Homes</span> in Northern Region</h2>
                        <p className="workspace-paragraph">Find yourself a home that suits your exact needs</p>
                    </div>
                    <div className="owl-carousel owl-theme">
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/6.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Grader Estate &#9679; Greater Accra</div>
                                <div className="item-name">Nana's Residence</div>
                                <div className="item-price">Ghc 1000&#9679; <span
                                    className="negotiation-status">Non-Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="item-image">
                                <img className="img-fluid" src={require('../../assets/img/9.jpg')}
                                     alt="house"/>
                            </div>
                            <div className="item-content">
                                <div className="item-location">Kumasi, Adum &#9679; Ashanti</div>
                                <div className="item-name">Bonsu House</div>
                                <div className="item-price">Ghc 35&#9679; <span
                                    className="negotiation-status">Negotiable</span></div>
                                <a className="workspace-link" href="view_space.html">View Efie</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Northern END*/}
        </>
    );
};

export default HomePage;
