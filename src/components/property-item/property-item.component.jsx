import React from 'react';
import './property-item.styles.scss';

const PropertyItem = () => {

    return (
        <>
            <div className="workspace-head-wrapper">
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
        </>
    );
};
