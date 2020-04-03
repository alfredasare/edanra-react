import React from "react";
import './profile-card.styles.scss';
import {Link} from "react-router-dom";

const ProfileCard = ({currentUser: {displayName, email, profile_img, id}}) => {

    return (
        <div style={{paddingLeft: '0', marginTop: '8.5em'}} className='col-sm-12 col-md-5'>
            <div className="card dash-profile-card">
                <div className="dash-profile-image">
                    <img className="img-fluid rounded-circle rounded-img" src={profile_img} alt=""/>
                </div>
                <div className="dash-profile-name">
                    <h4>{displayName}</h4>
                    <p>{email}</p>
                </div>
                <div className="dash-edit-link">
                    <Link to={`/edit-profile/${id}`}>Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
