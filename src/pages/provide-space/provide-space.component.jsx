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
    validateDescription, validateImages,
    validateMail,
    validateName, validatePrice, validateTown
} from "../../assets/js/validation";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";


const ProvideSpace = ({currentUser, propertyStorageUploadStart, regions, districts, isUploading, history}) => {

    const [agreeCheck, setAgreeCheck] = useState(false);
    const [propertyDetails, setPropertyDetails] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        property_type: '',
        description: '',
        region: '',
        district: '',
        town: '',
        property_images: null,
        price: '',
        negotiation_status: '',
        date_uploaded: new Date().toString(),
        ad_status: 'Hosted',
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
        imageError: '',
        priceError: '',
        negotiationError: '',
    });

    const {property_type, region, district, negotiation_status, property_images} = propertyDetails;


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

    const makePropertyValid = () => {
        setErrorMessages({...errorMessages, propertyError: ''});
    };

    const makeRegionValid = (event) => {
        setErrorMessages({...errorMessages, regionError: ''});
    };

    const makeNegotiationValid = () => {
        setErrorMessages({...errorMessages, negotiationError: ''});
    };

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
        } else if (event.target.name === 'town') {
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
        }
        const name = event.target.name;
        const files = event.target.files;
        setPropertyDetails({...propertyDetails, [name]: Array.from(files)});

    };

    const handleAgree = () => {
        setAgreeCheck(!agreeCheck);
    };

    return (
        <>
            <Navbar/>
            <main className="container">
                <div className="row">
                    <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2 animated fadeIn delay-1s">
                        <form onSubmit={handleSubmit} className="custom-form form-horizontal"
                              encType="multipart/form-data">

                            <h2>Provide The Details For Your Listing</h2>
                            <h4>Fill the form below with the details of the particular property you want to host. To
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
                                           onClick={makePropertyValid}/>
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


                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea onChange={handleChange}
                                          className="form-control" id="description" rows="2" name='description'
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
                                <label htmlFor="district">District</label>
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

                            <input onChange={handleFileChange} name="property_images" type="file"
                                   id="multiple-file-upload"
                                   hidden="hidden"
                                   multiple accept='image/*'/>
                            <label className="upload-button-label" htmlFor="multiple-file-upload">
                                <div id="propertiesUpBtn" className="btn btn-fab btn-round btn-primary">
                                    <i className="material-icons">layers</i>
                                </div>
                                <div className="upload-text">
                                    Click here to upload pictures of property (preferably 5 or less)
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
                                        {/*{property_images.map((image, idx) => {*/}
                                        {/*    return (*/}
                                        {/*        <img key={idx+1000} src={URL.createObjectURL(image)} alt=""/>*/}
                                        {/*    );*/}
                                        {/*})}*/}
                                    </div>
                                    : <></>
                            }
                            <p className='red o-100' tabIndex='-1' id='image'>{errorMessages.imageError}</p>

                            <FormInputText handleChange={handleChange} type='number' name='price' id='price'
                                           label='Price'
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
                                    Efiewura Platform
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
