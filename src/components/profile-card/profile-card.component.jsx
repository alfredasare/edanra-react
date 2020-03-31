import React from "react";
import './profile-card.styles.scss';

const ProfileCard = () => {

    return (
        <div style={{paddingLeft: '0'}} className='col-sm-12 col-md-6'>
            <div className="card dash-profile-card">
                <div className="dash-profile-image">
                    <img className="img-fluid profile-img" src="https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-600w-1194497251.jpg" alt=""/>
                </div>
                <div className="dash-profile-name">
                    <h4>Alfred Asare Amoah</h4>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
