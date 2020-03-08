import React from "react";
import './hosting-complete.styles.scss';

const HostingComplete = () => {

    return (
        <>
            <section style={{marginTop: '70px'}} className="container" id="owners-details">
                <div className="row">
                    <div className="col-xs-12 offset-xs-0 col-md-6 offset-md-3">
                        <h2 style={{fontWeight: 'bold'}}>Summary Of Uploaded Ad</h2>
                        <h2>Owner's Details</h2>
                        <div className="profile">
                            <div className="profile-top">
                                <div className="profile-img">
                                    <img className="img-fluid"
                                         src="https://firebasestorage.googleapis.com/v0/b/efiewura-db.appspot.com/o/property_images%2Fusers_profiles%2Fprofile.png?alt=media&token=5ca1731c-0b3a-49a9-bc0f-5e970caec199"
                                         alt="alfred's profile"/>
                                </div>
                                <div className="profile-username">
                                    <p>John Doe</p>
                                </div>
                            </div>
                            <div className="profile-bottom">
                                <div className="profile-content">
                                    <div className="single-item">
                                        <div className="item-left">City Of Residence</div>
                                        <div className="item-right">Tema Comm 19</div>
                                    </div>
                                    <hr/>
                                    <div className="single-item">
                                        <div className="item-left">Email</div>
                                        <div className="item-right">alfredasare101@gmail.com</div>
                                    </div>
                                    <hr/>
                                    <div className="single-item">
                                        <div className="item-left">Contact</div>
                                        <div className="item-right">+233277475052</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{marginTop: '50px'}} className="container">
                <div className="row">
                    <div className="col-12 offset-0 col-md-8 offset-2">
                        <h2>Listing's Details</h2>
                        <div className="animated fadeIn">
                            <h2 style={{textTransform: 'capitalize'}}>4 bedroom house in East Legon</h2>
                            <p style={{fontSize: '1.1em'}}><span style={{fontWeight: '400'}}>Region :</span> Greater
                                Accra
                                Region</p>
                            <p style={{fontSize: '1.1em'}}><span style={{fontWeight: '400'}}>District :</span> Accra
                                South
                            </p>
                            <p style={{fontSize: '1.1em'}}><span style={{fontWeight: '400'}}>Price :</span> Ghc
                                1300 &#9679;
                                Negotiable</p>
                            <h3>Description</h3>
                            <p style={{fontSize: '1.1em'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                consequuntur, ducimus laboriosam modi mollitia
                                nulla ratione similique sunt tempora ullam. Amet aspernatur atque debitis non
                                praesentium quaerat quis
                                similique veniam.
                            </p>
                        </div>
                        <h3>Main Image</h3>
                        <div style={{marginTop: '20px'}} className="main-pic animated fadeIn delay-1s">
                            <img className="img-raised rounded img-fluid" src={require('../../assets/img/22.jpg')}
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{marginTop: '70px'}} className="container">
                <h3>Click the other pictures of the listing to view them</h3>
            </div>

            <section className="container animated fadeIn delay-1s" id="other-pics">
                <div className="other-pic-item">
                    <img className="img-raised rounded img-fluid" src={require('../../assets/img/6.jpg')} alt=""
                         data-toggle="modal"
                         data-target=".other-pic-1"/>
                </div>
                <div className="other-pic-item">
                    <img className="img-raised rounded img-fluid" src={require('../../assets/img/9.jpg')} alt=""
                         data-toggle="modal"
                         data-target=".other-pic-2"/>
                </div>
                <div className="other-pic-item">
                    <img className="img-raised rounded img-fluid" src={require('../../assets/img/12.jpg')} alt=""
                         data-toggle="modal"
                         data-target=".other-pic-3"/>
                </div>
                <div className="other-pic-item">
                    <img className="img-raised rounded img-fluid" src={require('../../assets/img/14.jpg')} alt=""
                         data-toggle="modal"
                         data-target=".other-pic-4"/>
                </div>
            </section>


            <div className="modal fade other-pic-1" tabIndex="-1" role="dialog" aria-labelledby="other-pic-1"
                 style={{display: 'none'}}
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid" src={require('../../assets/img/6.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade other-pic-2" tabIndex="-1" role="dialog" aria-labelledby="other-pic-2"
                 style={{display: 'none'}}
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid" src={require('../../assets/img/9.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade other-pic-3" tabIndex="-1" role="dialog" aria-labelledby="other-pic-3"
                 style={{display: 'none'}}
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid" src={require('../../assets/img/12.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade other-pic-4" tabIndex="-1" role="dialog" aria-labelledby="other-pic-4"
                 style={{display: 'none'}}
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid" src={require('../../assets/img/14.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HostingComplete;
