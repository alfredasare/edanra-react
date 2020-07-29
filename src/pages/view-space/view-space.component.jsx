import React, {useState} from "react";
import {connect} from 'react-redux';
import Viewer from 'react-viewer';
import './view-space.styles.scss';
import {selectProperty} from "../../redux/properties/properties.selectors";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import {Helmet} from "react-helmet";
import ScrollToTop from "../../utils/scroll-to-top";

const ViewSpace = ({property}) => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <Helmet>
                <title>{property.property_type} in {property.town}, {property.region} hosted by {property.username}</title>
            </Helmet>
            <ScrollToTop/>
            <Navbar/>
            <section className="container" id="view-listing-head">
                <div className="main-pic animated fadeIn delay-1s">
                    <img className="img-raised rounded img-fluid" src={property.main_image_url}
                         alt=""/>
                </div>
                <div className="animated fadeIn" id="listing-details">
                    <h2 style={{textTransform: 'capitalize'}}>
                        {property.no_of_bedrooms ? `${property.no_of_bedrooms} bedroom `: ''}{property.property_type} in {property.town}
                    </h2>
                    <p style={{fontSize: '1.1em'}}><span style={{fontWeight: '400'}}>Region :</span> {property.region}
                    </p>
                    {
                        property.district ? <p style={{fontSize: '1.1em'}}><span
                            style={{fontWeight: '400'}}>District :</span> {property.district}</p> : <></>
                    }
                    <p style={{fontSize: '1.1em'}}><span
                        style={{fontWeight: '400'}}>Price :</span> Ghc {property.price} &#9679; {property.negotiation_status}</p>
                    <h3 style={{marginTop: '20px'}}>Description</h3>
                    <p style={{fontSize: '1.1em'}}>
                        {
                            property.description ? property.description : ``
                        }
                    </p>
                </div>
            </section>

            <div style={{marginTop: '50px'}} className="container">
                <h3>Click on any of the images to open the image gallery</h3>
            </div>


            <section className="container animated fadeIn delay-1s" id="other-pics">
                {
                    property.other_images_url.map((image_url) => {
                        return (
                            <div onClick={() => {
                                setVisible(true);
                            }} key={image_url.id + 300} className="other-pic-item">
                                <img className="img-raised rounded img-fluid" src={image_url.url}
                                     alt={`Property at ${property.town}`}/>
                            </div>
                        );
                    })
                }
            </section>

            <div>
                <Viewer
                    visible={visible}
                    onClose={() => {
                        setVisible(false);
                    }}
                    images={
                        property.other_images_url.map((image_url) => {
                            return {
                                src: image_url.url,
                                alt: `${property.property_type} at ${property.town}`
                            };
                        })
                    }
                />
            </div>

            <div style={{paddingTop: '150px', paddingBottom: '100px'}} className="container">
                <h2 style={{textTransform: 'capitalize', textAlign: 'center', marginBottom: '40px'}}>Contact the host to
                    book your
                    room</h2>
                <div className="row">
                    <div className="col-xs-12 offset-xs-0 col-md-6 offset-md-3">
                        <h2>Owner's Details</h2>
                        <div className="profile">
                            <div className="profile-top">
                                <div className="profile-img">
                                    <img className="img-fluid rounded-img"
                                         src={property.profile_img}
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
            <Footer/>
        </>
    );
};

const mapStateToProps = (state, ownProps) => ({
    property: selectProperty(ownProps.match.params.uid)(state),
});

export default connect(mapStateToProps)(ViewSpace);
