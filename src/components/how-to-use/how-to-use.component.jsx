import React from "react";
import './how-to-use.styles.scss';

const HowToUse = () => {

    return (
        <section id="how-to-use-container" className="container">
            <div className="row">
                <div style={{paddingTop: '30px'}} className="col-sm-12 col-md-10 col-lg-10 animated fadeIn">
                    <h2>What <span className="teal-head">edanra</span> Does</h2>
                    <p style={{marginTop: '1.2em'}}>
                        <span className="teal-head">edanra</span> connects house, hotel, hostel and room owners to their potential customers all across Ghana.
                        We save you from the long hunt for a convenient accommodation.
                        Enough of the hustle with property agents. Your next house or room is just a search away!
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
    );
};

export default HowToUse;