import React, {useState} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {createStructuredSelector} from "reselect";
import {
    selectCurrentUser,
    selectError,
    selectSuccessMessage,
    selectUpdatingUser
} from "../../redux/user/user.selectors";
import './edit-profile.styles.scss';
import {deleteProfileImageStart, editUserStart} from "../../redux/user/user.actions";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import {
    editProfileValidate,
    errorObject,
    validateAddress,
    validateContact,
    validateMail,
    validateName
} from "../../assets/js/validation";
import SuccessTick from "../../components/success-tick/success-tick.component";

const EditProfile = ({currentUser, error, isUpdating, updateProfileStart, deleteProfileImageStart, successMessage}) => {

    const oldProfileImage = currentUser.profile_img;
    const [updateButtonVisibility, setUpdateButtonVisibility] = useState(true);

    const [userCredentials, setUserCredentials] = useState({
        displayName: currentUser.displayName,
        email: currentUser.email,
        contact: currentUser.contact ? currentUser.contact : '',
        address: currentUser.address ? currentUser.address : '',
        profile_img: currentUser.profile_img,
        id: currentUser.id
    });

    const [errorMessages, setErrorMessages] = useState({
        nameError: '',
        mailError: '',
        contactError: '',
        addressError: '',
    });

    const {displayName, email, contact, address, profile_img, id} = userCredentials;

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

    const handleSubmit = event => {
        event.preventDefault();
        setUpdateButtonVisibility(false);

        const isValid = editProfileValidate(event);
        setError();

        if (isValid) {
            if (typeof profile_img === "object") {
                deleteProfileImageStart(oldProfileImage);
            }

            updateProfileStart({displayName, email, contact, address, profile_img, id});
        }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value});
        setUpdateButtonVisibility(true);

        if (event.target.name === 'displayName') {
            validatePropertyName(event);
        } else if (event.target.name === 'email') {
            validatePropertyMail(event);
        } else if (event.target.name === 'contact') {
            validatePropertyContact(event);
        } else if (event.target.name === 'address') {
            validatePropertyAddress(event);
        }
    };

    const handleFileChange = event => {
        const name = event.target.name;
        const file = event.target.files[0];
        setUserCredentials({
            ...userCredentials,
            [name]: file
        });
        setUpdateButtonVisibility(true);
    };

    return (
        <>
            <Navbar/>
            <main style={{marginTop: '100px'}} className="container">
                <div className="row">
                    <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2 animated fadeIn delay-1s">
                        <div style={{textAlign: 'justify', fontSize: '18px', marginBottom: '50px'}}>
                            <p style={{marginTop: '30px'}} className="property-head fadeInUp" data-wow-delay="0.3s">
                                Edit Profile Details
                            </p>
                            <p style={{fontSize: '1.1em'}} className="fadeInUp" data-wow-delay="0.5s">
                                Made a mistake while signing up? You can make changes to your profile here
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} style={{marginBottom: '70px', marginTop: '0'}}
                              className="form-horizontal custom-form" noValidate>
                            {
                                error ?
                                    <h5 className="update-message" style={{color: 'red'}}>Something went wrong. Check your internet connect</h5> : <></>
                            }
                            {
                                successMessage ?
                                    <h5 className="update-message" style={{color: 'teal'}}>{successMessage}</h5> : <></>
                            }

                            <div className="img-edit-preview">
                                <img className="img-fluid rounded-img rounded-circle"
                                     src={typeof profile_img === 'object' ? URL.createObjectURL(profile_img) : profile_img}
                                     alt=""/>
                            </div>
                            <FormInputText value={displayName} handleChange={handleChange} type='text'
                                           name='displayName'
                                           id='displayName' label='Name' onBlur={validatePropertyName}/>
                            <p className='red o-100'>{errorMessages.nameError}</p>

                            <FormInputText value={email} handleChange={handleChange} type='email' name='email'
                                           id='email'
                                           label='Contact Email' onBlur={validatePropertyMail}/>
                            <p className='red o-100'>{errorMessages.mailError}</p>

                            <input onChange={handleFileChange} name="profile_img" type="file" id="single-file-upload"
                                   hidden="hidden" accept='image/*'/>
                            <label className="upload-button-label" htmlFor="single-file-upload">
                                <div id="profileUpBtn" className="btn btn-fab btn-round btn-primary">
                                    <i className="material-icons">attach_file</i>
                                </div>
                                <div className="upload-text">Click here to update profile image</div>
                            </label>


                            <FormInputText value={contact} handleChange={handleChange} type='tel' name='contact'
                                           id='contact' label='Contact' onBlur={validatePropertyContact}/>
                            <p className='red o-100'>{errorMessages.contactError}</p>

                            <FormInputText value={address} handleChange={handleChange} type='text' name='address'
                                           id='address' label='Address' onBlur={validatePropertyAddress}/>
                            <p className='red o-100'>{errorMessages.addressError}</p>

                            <CustomButtonsContainer>
                                {
                                    isUpdating ? <LoadingSpinner/> : updateButtonVisibility ? <CustomButton type='submit'>Update</CustomButton> : <SuccessTick/>
                                }
                                <CustomButton type='reset' inverted="true">Reset</CustomButton>
                            </CustomButtonsContainer>

                            <div className="dashboard-link">
                                <Link to={'/dashboard'}>Back To Dashboard</Link>
                            </div>
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
    error: selectError,
    successMessage: selectSuccessMessage,
    isUpdating: selectUpdatingUser,
});

const mapDispatchToProps = dispatch => ({
    updateProfileStart: userDetails => dispatch(editUserStart(userDetails)),
    deleteProfileImageStart: imageUrl => dispatch(deleteProfileImageStart(imageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
