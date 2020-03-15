import React from "react";
import {connect} from 'react-redux';
import './view-space.styles.scss';
import {selectProperty} from "../../redux/properties/properties.selectors";

const ViewSpace = ({property}) => {

    return (
        <>
            <section className="container" id="view-listing-head">
                <div className="main-pic animated fadeIn delay-1s">
                    <img className="img-raised rounded img-fluid" src={property.main_image_url}
                         alt=""/>
                </div>
                <div className="animated fadeIn" id="listing-details">
                    <h2 style={{textTransform: 'capitalize'}}>{property.property_type} in {property.town}</h2>
                    <p style={{fontSize: '1.1em'}}><span style={{fontWeight: '400'}}>Region :</span> {property.region}
                    </p>
                    <p style={{fontSize: '1.1em'}}><span
                        style={{fontWeight: '400'}}>District :</span> {property.district}</p>
                    <p style={{fontSize: '1.1em'}}><span
                        style={{fontWeight: '400'}}>Price :</span> Ghc {property.price} &#9679;
                        {property.negotiation_status}</p>
                    <h3>Description</h3>
                    <p style={{fontSize: '1.1em'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                        consequuntur, ducimus
                        laboriosam modi mollitia
                        nulla ratione similique sunt tempora ullam. Amet aspernatur atque debitis non praesentium
                        quaerat quis
                        similique veniam.
                    </p>
                </div>
            </section>

            <div style={{marginTop: '50px'}} className="container">
                <h3>Click the other pictures of the listing to view them</h3>
            </div>


            <section className="container animated fadeIn delay-1s" id="other-pics">
                <div className="other-pic-item">
                    <img className="img-raised rounded img-fluid" src={property.other_images_url[0].url} alt=""
                         data-toggle="modal"
                         data-target=".other-pic-1"/>
                </div>
                <div className="other-pic-item">
                    <img className="img-raised rounded img-fluid" src={property.other_images_url[1].url} alt=""
                         data-toggle="modal"
                         data-target=".other-pic-2"/>
                </div>
                <div className="other-pic-item">
                    <img className="img-raised rounded img-fluid" src={property.other_images_url[2].url} alt=""
                         data-toggle="modal"
                         data-target=".other-pic-3"/>
                </div>
                <div className="other-pic-item">
                    <img className="img-raised rounded img-fluid" src={property.other_images_url[3].url} alt=""
                         data-toggle="modal"
                         data-target=".other-pic-4"/>
                </div>
            </section>


            {/*<div className="modal fade other-pic-1" tabIndex="-1" role="dialog" aria-labelledby="other-pic-1"*/}
            {/*     style={{display: 'none'}}*/}
            {/*     aria-hidden="true">*/}
            {/*    <div className="modal-dialog modal-lg">*/}
            {/*        <div className="modal-content">*/}
            {/*            <div className="modal-header">*/}
            {/*                <button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
            {/*                    <span aria-hidden="true">×</span>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <div className="modal-body">*/}
            {/*                <img className="img-fluid" src={require('../../assets/img/6.jpg')} alt=""/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="modal fade other-pic-2" tabIndex="-1" role="dialog" aria-labelledby="other-pic-2"*/}
            {/*     style={{display: 'none'}}*/}
            {/*     aria-hidden="true">*/}
            {/*    <div className="modal-dialog modal-lg">*/}
            {/*        <div className="modal-content">*/}
            {/*            <div className="modal-header">*/}
            {/*                <button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
            {/*                    <span aria-hidden="true">×</span>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <div className="modal-body">*/}
            {/*                <img className="img-fluid" src={require('../../assets/img/9.jpg')} alt=""/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className="modal fade other-pic-3" tabIndex="-1" role="dialog" aria-labelledby="other-pic-3"*/}
            {/*     style={{display: 'none'}}*/}
            {/*     aria-hidden="true">*/}
            {/*    <div className="modal-dialog modal-lg">*/}
            {/*        <div className="modal-content">*/}
            {/*            <div className="modal-header">*/}
            {/*                <button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
            {/*                    <span aria-hidden="true">×</span>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <div className="modal-body">*/}
            {/*                <img className="img-fluid" src={require('../../assets/img/12.jpg')} alt=""/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className="modal fade other-pic-4" tabIndex="-1" role="dialog" aria-labelledby="other-pic-4"*/}
            {/*     style={{display: 'none'}}*/}
            {/*     aria-hidden="true">*/}
            {/*    <div className="modal-dialog modal-lg">*/}
            {/*        <div className="modal-content">*/}
            {/*            <div className="modal-header">*/}
            {/*                <button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
            {/*                    <span aria-hidden="true">×</span>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <div className="modal-body">*/}
            {/*                <img className="img-fluid" src={require('../../assets/img/14.jpg')} alt=""/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div style={{paddingTop: '150px', paddingBottom: '100px'}} className="container">
                <h2 style={{textTransform: 'capitalize', textAlign: 'center', marginBottom: '40px'}}>Contact the host to
                    book your
                    room</h2>
                <div className="row">
                    <div className="col-xs-12 offset-xs-0 col-md-6 offset-md-3">
                        <h2 style={{fontWeight: 'bold'}}>Summary Of Uploaded Ad</h2>
                        <h2>Owner's Details</h2>
                        <div className="profile">
                            <div className="profile-top">
                                <div className="profile-img">
                                    <img className="img-fluid" src={require('../../assets/img/profile.png')}
                                         alt={`${property.username}'s profile`}/>
                                </div>
                                <div className="profile-username">
                                    <p>{property.username}</p>
                                </div>
                            </div>
                            <div className="profile-bottom">
                                <div className="profile-content">
                                    <div className="single-item">
                                        <div className="item-left">City Of Residence</div>
                                        <div className="item-right">{property.address}</div>
                                    </div>
                                    <hr/>
                                    <div className="single-item">
                                        <div className="item-left">Email</div>
                                        <div className="item-right">{property.email}</div>
                                    </div>
                                    <hr/>
                                    <div className="single-item">
                                        <div className="item-left">Contact</div>
                                        <div className="item-right">{property.contact}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state, ownProps) => ({
    property: selectProperty(ownProps.match.params.uid)(state)
});

export default connect(mapStateToProps)(ViewSpace);
