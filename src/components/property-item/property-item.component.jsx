import React from 'react';
import {Link} from "react-router-dom";
import './property-item.styles.scss';

const PropertyItem = ({routeName, main_image_url, town, region, username, price, property_type, negotiation_status}) => {

    return (
        <div style={{marginTop: '20px'}} className="col-md-4">
            <Link to={`properties/${routeName}`}>
                <div className="slide-item">
                    <div className="item-image">
                        <img src={main_image_url}
                             alt={`${property_type} at ${region}`}/>
                    </div>
                    <div className="item-content">
                        <div className="item-location">{town} &#9679; {region}</div>
                        <div className="item-name">{property_type} hosted by {username}</div>
                        <div className="item-price">Ghc {price} / month &#9679; <span
                            className="negotiation-status">{negotiation_status}</span>
                        </div>
                        <Link className="workspace-link" to={`properties/${routeName}`}>View Space</Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PropertyItem;
