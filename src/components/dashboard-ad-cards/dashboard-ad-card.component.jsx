import React from "react";
import './dashboard-ad-card.styles.scss';

const DashboardAdCard = ({main_image_url, town, price, date_uploaded, ad_status}) => {

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <img className="card-img-top" src={main_image_url} alt=""/>
                <div className="card-body">
                    <div className="options">
                        <p><a className="options-link" href="#">Edit</a></p>
                        <p><a className="options-link" href="#">Delete</a></p>
                    </div>
                </div>
                <ul className="list-group">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <li className="list-group-item">{town}</li>
                        <li className="list-group-item">Ghs {price}</li>
                    </div>
                    <li className="list-group-item">Uploaded on {date_uploaded}</li>
                    <li className="list-group-item">Ad is {ad_status}</li>
                    <li className="list-group-item">{30} days left</li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardAdCard;
