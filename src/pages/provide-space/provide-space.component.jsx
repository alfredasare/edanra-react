import React, {useState} from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './provide-space.styles.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import FormInputText from "../../components/form-input-text/form-input-text.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {propertyStorageUploadStart} from "../../redux/property-upload/property-upload.actions";
import {selectDistricts, selectRegions} from "../../redux/static-data/static-data.selectors";
import {selectIsUploading} from "../../redux/property-upload/property-upload.selectors";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import {
    errorObject, provideSpaceValidate,
    validateAddress,
    validateContact,
    validateDescription, validateEmpty, validateImages,
    validateMail, validateMainImage,
    validateName, validatePrice, validateTown
} from "../../assets/js/validation";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import {Helmet} from "react-helmet";


const ProvideSpace = ({currentUser, propertyStorageUploadStart, regions, districts, isUploading, history}) => {

    const [agreeCheck, setAgreeCheck] = useState(false);
    const [propertyDetails, setPropertyDetails] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        property_type: '',
        no_of_bedrooms: '',
        description: '',
        region: '',
        district: '',
        town: '',
        property_images: null,
        price: '',
        ad_type: '',
        charge_rate: '',
        negotiation_status: '',
        date_uploaded: new Date().toString(),
        last_date_paid: '',
        subscription_type: 'free_three',
        user_id: null,
        username: null,
        other_images_url: null,
        main_image_url: '',
        profile_img: ''
    });

    const [errorMessages, setErrorMessages] = useState({
        nameError: '',
        mailError: '',
        contactError: '',
        addressError: '',
        propertyError: '',
        descriptionError: '',
        regionError: '',
        townError: '',
        mainImageError: '',
        imageError: '',
        priceError: '',
        adTypeError: '',
        negotiationError: '',
        no_of_bedroomsError: '',
        charge_rateError: '',
    });

    const {property_type, region, district, negotiation_status, property_images, main_image_url, charge_rate} = propertyDetails;


    const setError = () => {
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessages({...errorMessages, [error]: message});
    };


    const validatePropertyName = event => {
        validateName(event);
        setError();
    };

    const validatePropertyMail = event => {
        validateMail(event);
        setError();
    };

    const validatePropertyContact = event => {
        validateContact(event);
        setError();
    };

    const validatePropertyAddress = event => {
        validateAddress(event);
        setError();
    };
    const validateBedrooms = event => {
        validateEmpty(event)
        setError();
    }

    const makePropertyValid = () => {
        setErrorMessages({...errorMessages, propertyError: ''});
    };

    const makeRegionValid = (event) => {
        setErrorMessages({...errorMessages, regionError: ''});
    };

    const makeNegotiationValid = () => {
        setErrorMessages({...errorMessages, negotiationError: ''});
    };

    const makeRateValid = () => {
        setErrorMessages({...errorMessages, charge_rateError: ''});
    }

    const validatePropertyDescription = event => {
        validateDescription(event);
        setError();
    };

    const validatePropertyTown = event => {
        validateTown(event);
        setError();
    };

    const validatePropertyPrice = event => {
        validatePrice(event);
        setError();
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (agreeCheck) {
            const isValid = provideSpaceValidate(event);
            setError();

            if (isValid) {
                history.push('/uploading-space');
                propertyStorageUploadStart(propertyDetails);
                console.log(propertyDetails);
            }
        }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setPropertyDetails({
            ...propertyDetails,
            [name]: value,
            user_id: currentUser && currentUser.id,
            username: currentUser && currentUser.displayName,
            profile_img: currentUser && currentUser.profile_img
        });
        if (event.target.name === 'name') {
            validatePropertyName(event);
        } else if (event.target.name === 'email') {
            validatePropertyMail(event);
        } else if (event.target.name === 'contact') {
            validatePropertyContact(event);
        } else if (event.target.name === 'address') {
            validatePropertyAddress(event);
        } else if (event.target.name === 'description') {
            validatePropertyDescription(event);
        } else if (event.target.name === 'no_of_bedrooms') {
            validateBedrooms(event);
        }
        else if (event.target.name === 'town') {
            validatePropertyTown(event);
        } else if (event.target.name === 'price') {
            validatePropertyPrice(event);
        } else if (event.target.name === 'region') {
            makeRegionValid(event);
        }
    };

    const handleFileChange = event => {
        if (event.target.name === 'property_images') {
            if (validateImages(event)) {
                setErrorMessages({...errorMessages, imageError: ''});
            } else {
                setErrorMessages({...errorMessages, imageError: errorObject.message});
            }
        }else if (event.target.name === 'main_image_url'){
            if (validateMainImage(event)){
                setErrorMessages({...errorMessages, mainImageError: ''});
            }else{
                setErrorMessages({...errorMessages, mainImageError: errorObject.message});
            }
        }
        const name = event.target.name;

        if (name === 'property_images') {
            const files = event.target.files;
            setPropertyDetails({...propertyDetails, [name]: Array.from(files)});
        } else {
            const file = event.target.files[0];
            setPropertyDetails({...propertyDetails, [name]: file});
        }
    };



    const handleAgree = () => {
        setAgreeCheck(!agreeCheck);
    };

    return (
        <>
            <Helmet>
                <title>Upload A Property Ad</title>
            </Helmet>
            <Navbar/>
            <main className="container">
                <div className="row">
                    <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2 animated fadeIn delay-1s">
                        <form onSubmit={handleSubmit} className="custom-form form-horizontal"
                              encType="multipart/form-data">

                            <h2>Provide The Details For Your Listing</h2>
                            <h4 style={{color: '#3c4858', fontWeight: 'normal'}}>Fill the form below with the details of the particular property you want to host. To
                                make
                                transactions
                                easy make sure you input accurate information about the property
                            </h4>
                            <h5 className="custom-form-subhead">1. Please enter your details</h5>

                            <FormInputText handleChange={handleChange} type='text' name='name' id='name' label='Name'
                                           onBlur={validatePropertyName}/>
                            <p className='red o-100'>{errorMessages.nameError}</p>

                            <FormInputText handleChange={handleChange} type='email' name='email' id='email'
                                           label='Email'
                                           onBlur={validatePropertyMail}/>
                            <p className='red o-100'>{errorMessages.mailError}</p>

                            <FormInputText handleChange={handleChange} type='tel' name='contact' id='contact'
                                           label='Contact' onBlur={validatePropertyContact}/>
                            <p className='red o-100'>{errorMessages.contactError}</p>

                            <FormInputText handleChange={handleChange} type='text' name='address' id='address'
                                           label='Address' onBlur={validatePropertyAddress}/>
                            <p className='red o-100'>{errorMessages.addressError}</p>


                            <h5 className="custom-form-subhead">2. Please provide the details of your listing</h5>
                            <h5 style={{fontWeight: 'bold'}}>Property type</h5>
                            <div className="form-check form-check-radio">
                                <label htmlFor="house" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="house"
                                           value="House" checked={property_type === "House"}
                                           onClick={makePropertyValid}/>
                                    House
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label htmlFor="hotel" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="hotel"
                                           value="Hotel" checked={property_type === "Hotel"}
                                           onClick={makePropertyValid}/>
                                    Hotel
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label htmlFor="guest-house" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="guest-house"
                                           value="Guest House" checked={property_type === "Guest House"}
                                           onClick={makePropertyValid}/>
                                    Guest House
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label htmlFor="hostel" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="hostel"
                                           value="Hostel" checked={property_type === "Hostel"}
                                           />
                                    Hostel
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label htmlFor="apartment" className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="property_type" id="apartment"
                                           value="Apartment" checked={property_type === "Apartment"}
                                           onClick={makePropertyValid}/>
                                    Apartment
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <p className='red o-100'>{errorMessages.propertyError}</p>


                            <FormInputText handleChange={handleChange} type='number' min="0" name='no_of_bedrooms' id='no_of_bedrooms'
                                           label='Number of bedrooms'/>
                            <p className='red o-100'>{errorMessages.no_of_bedroomsError}</p>



                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea onChange={handleChange}
                                          className="form-control" id="description" rows="3" name='description'
                                          onBlur={validatePropertyDescription}/>
                            </div>
                            <p className='red o-100'>{errorMessages.descriptionError}</p>


                            <div className="form-group">
                                <label style={{color: 'rgba(0,0,0,0.5)'}} htmlFor="region">Region</label>
                                <select value={region} onChange={handleChange} className="form-control"
                                        data-style="btn btn-link" id="region" name="region">
                                    <option value>Select an option</option>
                                    {
                                        regions.map((region, idx) => {
                                            return (
                                                <option key={idx + 30} value={region}>{`${region} Region`}</option>);
                                        })
                                    }
                                </select>
                            </div>
                            <p className='red o-100'>{errorMessages.regionError}</p>


                            <div className="form-group">
                                <label htmlFor="district">District (optional)</label>
                                <input value={district} onChange={handleChange} list="district" className="form-control"
                                       name="district" autoComplete="off"/>
                                <datalist id="district">
                                    {
                                        districts.map((district, idx) => {
                                            return (<option key={idx} value={district}/>);
                                        })
                                    }
                                </datalist>
                            </div>

                            <FormInputText handleChange={handleChange} type='text' name='town' id='town' label='Town'
                                           onBlur={validatePropertyTown}/>
                            <p className='red o-100'>{errorMessages.townError}</p>


                            <h5 className="custom-form-subhead">Main Display Image</h5>
                            <input onChange={handleFileChange} name="main_image_url" type="file"
                                   id="single-file-upload"
                                   hidden="hidden"
                                   accept='image/*'/>
                            <label className="upload-button-label" htmlFor="single-file-upload">
                                <div id="propertiesUpBtn" className="btn btn-fab btn-round btn-primary">
                                    <i className="material-icons">attachment</i>
                                </div>
                                <div className="upload-text">
                                    Click here to upload the main display image
                                </div>
                            </label>
                            {
                                main_image_url
                                    ? <div className="uploaded-images">
                                        <h5>You uploaded:</h5>
                                        <ul>
                                            <li>{main_image_url.name}</li>
                                        </ul>
                                    </div>
                                    : <></>
                            }
                            <p className='red o-100'>{errorMessages.mainImageError}</p>


                            <h5 className="custom-form-subhead">Other Images</h5>

                            <input onChange={handleFileChange} name="property_images" type="file"
                                   id="multiple-file-upload"
                                   hidden="hidden"
                                   multiple accept='image/*'/>
                            <label className="upload-button-label" htmlFor="multiple-file-upload">
                                <div id="propertiesUpBtn" className="btn btn-fab btn-round btn-primary">
                                    <i className="material-icons">layers</i>
                                </div>
                                <div className="upload-text">
                                    Click here to upload pictures of property (2 to 5 images)
                                </div>
                            </label>
                            {
                                property_images
                                    ? <div className="uploaded-images">
                                        <h5>You uploaded:</h5>
                                        <ul>
                                            {
                                                property_images.map((image, idx) => {
                                                    return (<li key={idx + 100}>{image.name}</li>);
                                                })
                                            }
                                        </ul>
                                    </div>
                                    : <></>
                            }
                            <p className='red o-100' tabIndex='-1' id='image'>{errorMessages.imageError}</p>


                            <h5 className="custom-form-subhead">Charge Rate</h5>
                            <div className="form-check form-check-radio">
                                <label className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="charge_rate" id="per-night"
                                           value="per night" checked={charge_rate === 'per night'} onClick={makeRateValid}/>
                                    Per night
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="charge_rate"
                                           id="per-month" value="per month"
                                           checked={charge_rate === 'per month'} onClick={makeRateValid}/>
                                    Per month
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>

                            <p className='red o-100'>{errorMessages.charge_rateError}</p>



                            <FormInputText handleChange={handleChange} type='number' name='price' id='price'
                                           label={`Price ${!charge_rate ? '' : charge_rate === "per night" ? 'per night' : 'per month'} (GHS)`}
                                           onBlur={validatePropertyPrice}/>
                            <p className='red o-100'>{errorMessages.priceError}</p>

                            <h5 className="custom-form-subhead">4. Negotiation status</h5>
                            <div className="form-check form-check-radio">
                                <label className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="negotiation_status" id="negotiable"
                                           value="Negotiable" checked={negotiation_status === 'Negotiable'}
                                           onClick={makeNegotiationValid}/>
                                    Negotiable
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <div className="form-check form-check-radio">
                                <label className="form-check-label">
                                    <input onChange={handleChange} className="form-check-input" type="radio"
                                           name="negotiation_status"
                                           id="non-negotiable" value="Non-negotiable"
                                           checked={negotiation_status === 'Non-negotiable'}
                                           onClick={makeNegotiationValid}/>
                                    Non-negotiable
                                    <span className="circle">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>
                            <p className='red o-100'>{errorMessages.negotiationError}</p>


                            <div style={{marginTop: '30px', marginBottom: '30px'}} className="form-check">
                                <label className="form-check-label">
                                    <input onChange={handleAgree} className="form-check-input" type="checkbox"
                                           checked={agreeCheck} name="agree"/>
                                    By checking this, you hereby agree with all the terms and conditions associated
                                    with using the
                                    Edanra Platform
                                    <span className="form-check-sign">
                                    <span className="check"/>
                                </span>
                                </label>
                            </div>

                            <CustomButtonsContainer>
                                {
                                    isUploading ? <LoadingSpinner/> :
                                        <CustomButton type='submit' disabled={!agreeCheck}>Host</CustomButton>
                                }
                                <CustomButton type='reset' inverted="true">Reset</CustomButton>
                            </CustomButtonsContainer>
                            {
                                isUploading ?
                                    <h4 className="uploading-message">Please wait. We're uploading your ad and updating
                                        your dashboard.</h4> : <></>
                            }
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    districts: selectDistricts,
    regions: selectRegions,
    isUploading: selectIsUploading,

});

const mapDispatchToProps = dispatch => ({
    propertyStorageUploadStart: (propertyDetails) => dispatch(propertyStorageUploadStart(propertyDetails)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProvideSpace));
