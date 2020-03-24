import React, {useState} from "react";
import {connect} from 'react-redux';
import './dashboard-ad-card.styles.scss';
import {Link} from "react-router-dom";
import {removePropertyStart} from "../../redux/properties/properties.actions";
import {createStructuredSelector} from "reselect";
import {selectPropertiesForDisplay} from "../../redux/properties/properties.selectors";

const DashboardAdCard = ({property, removePropertyStart, allProperties}) => {

    const {routeName,main_image_url, town, price, date_uploaded, ad_status} = property;

    const [deleteToggler, setDeleteToggler] = useState(false);

    const handleDeleteToggler = event => {
        event.preventDefault();
        setDeleteToggler(!deleteToggler);
    };

    const handleDelete = event => {
        event.preventDefault();
        removePropertyStart({allProperties, property})
    };

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <img className="card-img-top" src={main_image_url} alt=""/>
                <div className="card-body">
                    {
                        deleteToggler
                            ? (
                                <>
                                    <p style={{fontSize: '1em', fontWeight: 'bold'}}>Are you sure you want to delete this ad ?</p>
                                    <div className="options">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <p><a onClick={handleDelete} className="options-link" href="#" >Yes</a></p>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <p><a onClick={handleDeleteToggler} className="options-link" href="#">No</a></p>
                                    </div>
                                </>
                            )
                            : <div className="options">
                                <p><Link className="options-link" to={`/edit-space/${routeName}`}>Edit</Link></p>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <p><a onClick={handleDeleteToggler} className="options-link" href="#">Delete</a></p>
                            </div>
                    }
                </div>
                <ul className="list-group">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <li className="list-group-item">{town}</li>
                        <li className="list-group-item">Ghs {price}</li>
                    </div>
                    <li className="list-group-item">Uploaded on {date_uploaded}</li>
                    <li className="list-group-item">Ad is {ad_status}</li>
                    <div className="badge-container">
                        {
                            ad_status === "Hosted" ? <span className="badge badge-pill badge-success">Hosted</span> :
                                <span className="badge badge-pill badge-warning">Pending</span>
                        }
                    </div>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    allProperties: selectPropertiesForDisplay,
});

const mapDispatchToProps = dispatch => ({
    removePropertyStart: property => dispatch(removePropertyStart(property))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAdCard);
