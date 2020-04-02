import React from "react";
import './profile-card.styles.scss';
import {Link} from "react-router-dom";

const ProfileCard = ({currentUser: {displayName, email, profile_img, id}}) => {

    const default_img = 'https://firebasestorage.googleapis.com/v0/b/efiewura-db-60044.appspot.com/o/site-images%2Favatar-placeholder_v0ecjm.png?alt=media&token=ec952423-c148-409e-ab6e-15bf295424bd';

    return (
        <div style={{paddingLeft: '0', marginTop: '8.5em'}} className='col-sm-12 col-md-5'>
            <div className="card dash-profile-card">
                <div className="dash-profile-image">
                    <img className="img-fluid rounded-circle rounded-img" src={profile_img ? profile_img : default_img} alt=""/>
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
