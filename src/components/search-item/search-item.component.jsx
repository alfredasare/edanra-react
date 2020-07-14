import React from 'react';
import {Link} from "react-router-dom";

const SearchItem = ({town, region, price, routeName, main_image_url, property_type}) => {

    return (
        <Link to={`properties/${routeName}`}>
            <div className="card">
                <img className="card-img-top" src={main_image_url} alt={`${property_type} at ${region}`}/>
                <div className="card-body">
                    <p>{region} Region &#9679; {town}</p>
                    <p>Ghc {price}</p>
                    <Link className="workspace-link" to={`properties/${routeName}`}>View Space</Link>
                </div>
            </div>
        </Link>
    );
};

export default SearchItem;
