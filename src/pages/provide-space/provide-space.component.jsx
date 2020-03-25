import React, {useState} from "react";
import {connect} from 'react-redux';
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

const ProvideSpace = ({currentUser, propertyStorageUploadStart, regions, districts, isUploading}) => {

    const [agreeCheck, setAgreeCheck] = useState(false);
    const [propertyDetails, setPropertyDetails] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        profile_img: '',
        property_type: '',
        description: '',
        region: '',
        district: '',
        town: '',
        property_images: null,
        price: '',
        negotiation_status: '',
        date_uploaded: new Date().toString(),
        ad_status: '',
        user_id: '',
        username: '',
        other_images_url: null,
        main_image_url: '',
    });

    const {profile_img, property_type, region, district, negotiation_status, property_images} = propertyDetails;

    const handleSubmit = event => {
        event.preventDefault();

        propertyStorageUploadStart(propertyDetails);
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setPropertyDetails({
            ...propertyDetails,
            [name]: value,
        });
    };

    const handleFileChange = event => {
        const name = event.target.name;
        const file = name === 'profile_img' ? event.target.files[0] : event.target.files;
        name === 'profile_img' ? setPropertyDetails({
            ...propertyDetails,
            [name]: file
        }) : setPropertyDetails({...propertyDetails, [name]: Array.from(file)});
    };

    const handleAgree = () => {
        setAgreeCheck(!agreeCheck);
        setPropertyDetails({
            ...propertyDetails,
            ad_status: 'Pending',
            user_id: currentUser.id,
            username: currentUser.displayName
        });
    };

    return (
        <main className="container">
            <div className="row">
                <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2 animated fadeIn delay-1s">
                    <form onSubmit={handleSubmit} className="custom-form form-horizontal" encType="multipart/form-data">

                        <h2>Provide The Details For Your Listing</h2>
                        <h4>Fill the form below with the details of the particular property you want to host. To
                            make
                            transactions
                            easy make sure you input accurate information about the property
                        </h4>
                        <h5 className="custom-form-subhead">1. Please enter your details</h5>

                        <FormInputText handleChange={handleChange} type='text' name='name' id='name' label='Name'
                                       required/>
                        <FormInputText handleChange={handleChange} type='email' name='email' id='email' label='Email'
                                       required/>
                        <FormInputText handleChange={handleChange} type='tel' name='contact' id='contact'
                                       label='Contact' required/>
                        <FormInputText handleChange={handleChange} type='text' name='address' id='address'
                                       label='Address' required/>


                        <input onChange={handleFileChange} name="profile_img" type="file" id="single-file-upload"
                               hidden="hidden"/>
                        <label className="upload-button-label" htmlFor="single-file-upload">
                            <div id="profileUpBtn" className="btn btn-fab btn-round btn-primary">
                                <i className="material-icons">attach_file</i>
                            </div>
                            <div className="upload-text">Click here to upload a profile image</div>
                        </label>
                        {
                            profile_img
                                ? <div className="uploaded-images">
                                    <h5>You uploaded:</h5>
                                    <ul>
                                        <li>{profile_img.name}</li>
                                    </ul>
                                </div>
                                : <></>
                        }

                        <h5 className="custom-form-subhead">2. Please provide the details of your listing</h5>
                        <h5 style={{fontWeight: 'bold'}}>Property type</h5>
                        <div className="form-check form-check-radio">
                            <label htmlFor="house" className="form-check-label">
                                <input onChange={handleChange} className="form-check-input" type="radio"
                                       name="property_type" id="house"
                                       value="House" checked={property_type === "House"}/>
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
                                       value="Hotel" checked={property_type === "Hotel"}/>
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
                                       value="Guest House" checked={property_type === "Guest House"}/>
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
                                       value="Hostel" checked={property_type === "Hostel"}/>
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
                                       value="Apartment" checked={property_type === "Apartment"}/>
                                Apartment
                                <span className="circle">
                                    <span className="check"/>
                                </span>
                            </label>
                        </div>


                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea onChange={handleChange}
                                      className="form-control" id="description" rows="2" name='description' required/>
                        </div>


                        <div className="form-group">
                            <label style={{color: 'rgba(0,0,0,0.5)'}} htmlFor="region">Region</label>
                            <select value={region} onChange={handleChange} className="form-control"
                                    data-style="btn btn-link" id="region" name="region"
                                    required>
                                <option value>Select an option</option>
                                {
                                    regions.map((region, idx) => {
                                        return (<option key={idx + 30} value={region}>{`${region} Region`}</option>);
                                    })
                                }
                            </select>
                        </div>

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
                                       required/>


                        <input onChange={handleFileChange} name="property_images" type="file" id="multiple-file-upload"
                               hidden="hidden"
                               multiple/>
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
                                </div>
                                : <></>
                        }


                        <FormInputText handleChange={handleChange} type='number' name='price' id='price' label='Price'
                                       required/>

                        <h5 className="custom-form-subhead">4. Negotiation status</h5>
                        <div className="form-check form-check-radio">
                            <label className="form-check-label">
                                <input onChange={handleChange} className="form-check-input" type="radio"
                                       name="negotiation_status" id="negotiable"
                                       value="Negotiable" checked={negotiation_status === 'Negotiable'}/>
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
                                       checked={negotiation_status === 'Non-negotiable'}/>
                                Non-negotiable
                                <span className="circle">
                                    <span className="check"/>
                                </span>
                            </label>
                        </div>


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


export default connect(mapStateToProps, mapDispatchToProps)(ProvideSpace);
