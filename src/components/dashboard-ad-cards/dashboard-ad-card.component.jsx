import React, {useState} from "react";
import {connect} from 'react-redux';
import './dashboard-ad-card.styles.scss';
import {Link} from "react-router-dom";
import {removePropertyStart} from "../../redux/properties/properties.actions";
import {createStructuredSelector} from "reselect";
import {selectPropertiesForDisplay} from "../../redux/properties/properties.selectors";

const DashboardAdCard = ({property, removePropertyStart, allProperties}) => {

    const {routeName, main_image_url, town, price, date_uploaded, ad_status, ad_type} = property;

    // date calculator //
    // const daysBetween = (date1, date2) => {
    //     //Get 1 day in milliseconds
    //     // let one_day = 1000 * 60 * 60 * 24;
    //
    //     // Convert both dates to milliseconds
    //     let date1_ms = date1.getTime();
    //     let date2_ms = date2.getTime();
    //
    //     // Calculate the difference in milliseconds
    //     let difference_ms = date2_ms - date1_ms;
    //     //take out milliseconds
    //     difference_ms = difference_ms / 1000;
    //     // let seconds = Math.floor(difference_ms % 60);
    //     difference_ms = difference_ms / 60;
    //     // let minutes = Math.floor(difference_ms % 60);
    //     difference_ms = difference_ms / 60;
    //     // let hours = Math.floor(difference_ms % 24);
    //     // return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
    //     return Math.floor(difference_ms / 24) + 1;
    // //    add one up to round up the remaining hours and minutes ...
    // };

    let myDate = [];
    const date = new Date(date_uploaded);
    myDate.push(date.getDate());
    myDate.push(date.getMonth() + 1);
    myDate.push(date.getFullYear());
    const formattedDate = myDate.join('-');
    //
    // const todayDate = new Date();
    //
    // // get day for upload date
    // const upload_day = date.getDate();
    // // add 30 days to the upload date;
    // date.setDate(upload_day + 150);
    // const newDate = date.toDateString();
    //
    // // const daysRemaining = daysBetween(todayDate, new Date(newDate));
    //
    //
    // // End of date calculator //

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
                                    <p style={{fontSize: '1em', fontWeight: 'bold'}}>Are you sure you want to delete this ad
                                        ?</p>
                                    <div className="options">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <p><a onClick={handleDelete} className="options-link" href="#">Yes</a></p>
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
                    <li className="list-group-item">Uploaded on {formattedDate}</li>
                    <li className="list-group-item">For {ad_type}</li>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="badge-container">
                            {
                                ad_status === "Hosted" ?
                                    <span className="badge badge-pill badge-success">Hosted</span> :
                                    <span className="badge badge-pill badge-warning">Pending</span>
                            }
                        </div>
                        {/*<span style={{paddingRight: 16}}>Days remaining:  <span style={{color: "#004D44"}}>{daysRemaining}</span></span>*/}
                    </div>
                    <li className="list-group-item ad-view-link">
                        <Link to={`properties/${routeName}`}>View ad</Link>
                    </li>
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
