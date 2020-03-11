import React from "react";
import './about.styles.scss';
import Header from "../../components/header/header.component";

const AboutPage = () => {

    const url = "https://firebasestorage.googleapis.com/v0/b/efiewura-db-60044.appspot.com/o/site-images%2F20-cover.jpg?alt=media&token=cad7f750-9a2e-48b5-85c6-30951f26b27e";

    return (
        <>
            <Header title="About EFIEWURA" imageUrl={url}/>

            <section style={{marginBottom: '100px'}} className="container">
                <div className="row">
                    <div className="col-10 offset-1 col-lg-12 offset-lg-0 about-text animated fadeIn delay-1s">
                        <h2>SERVICES</h2>
                        <p>
                            EFIEWURA is an online catalogue for arranging or offering accommodation space, primarily for
                            the average
                            Ghanaian especially National Service Personnel. It does not own any of the property
                            listings. It acts as
                            a meeting point for accommodation providers and seeekers. Apart from the listing fee paid by
                            space
                            providers, no other commission is required from either party. The platform is Ghanaian
                            based.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 offset-1 col-lg-12 offset-lg-0 about-text animated fadeIn delay-1s">
                        <h2>HOW THE PLATFORM WORKS</h2>
                        <p>
                            Efiewura is an online hub which lets people to showcase their property or spare rooms
                            available for rent
                            or lease. Efiewura charges a flat fee for property listing on the site from ad owners. There
                            are photos
                            of the property and contact details of owners for correspondence
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
