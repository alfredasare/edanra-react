import React from "react";
import './how-to-use.styles.scss';

const HowToUse = () => {

    return (
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
    );
};

export default HowToUse;