import React, {useState} from "react";
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import './signup.styles.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import FormInputText from "../../components/form-input-text/form-input-text.component";
import {signUpStart} from "../../redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {selectError, selectLoadingUser} from "../../redux/user/user.selectors";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import {
    errorObject,
    signUpValidate,
    validateConfirmPassword,
    validateMail,
    validateName,
    validateSpecialPassword
} from "../../assets/js/validation";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import PasswordToggle from "../../components/passwordToggle/passwordToggle.component";

const SignUp = ({signUpStart, error, loader}) => {

    const defaultImage = require('../../assets/img/avatar-placeholder_v0ecjm.png');
    const editedDefaultImageUrl = defaultImage.replace("data:image/png;base64,", "");

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        profile_img: editedDefaultImageUrl,
    });

    const [errorMessages, setErrorMessages] = useState({
        nameError: '',
        mailError: '',
        passwordError: '',
        confirmPasswordError: '',
    });

    const {displayName, email, password, profile_img} = userCredentials;

    const setError = () => {
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessages({...errorMessages, [error]: message});
    };

    const validateSignUpName = event => {
        validateName(event);
        setError();
    };
    const validateSignUpMail = event => {
        validateMail(event);
        setError();
    };
    const validateSignUpPassword = event => {
        validateSpecialPassword(event);
        setError();
    };
    const validateSignUpConfirmPassword = event => {
        validateConfirmPassword(event);
        setError();
    };

    const handleSubmit = event => {
        event.preventDefault();
        const isValid = signUpValidate(event);
        setError();

        if (isValid) {
            signUpStart({displayName, email, password, profile_img});
        }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        if (event.target.name === 'displayName') {
            validateSignUpName(event);
        } else if (event.target.name === 'email') {
            validateSignUpMail(event);
        } else if (event.target.name === 'password') {
            validateSignUpPassword(event);
        } else if (event.target.name === 'confirmPassword') {
            validateSignUpConfirmPassword(event);
        }
        setUserCredentials({...userCredentials, [name]: value});
    };

    const handleFileChange = event => {
        const name = event.target.name;
        const file = event.target.files[0];
        setUserCredentials({
            ...userCredentials,
            [name]: file
        });
    };

    const showPass = (event) => {
        let pass;
        if (event.target.name === 'password'){
            pass = document.getElementById('password');
        }else if(event.target.name === 'confirmPassword'){
            pass = document.getElementById('confirmPassword');
        }
        if (pass.type === 'password'){
            pass.type = 'text';
        }else{
            pass.type = 'password';
        }
    };

    return (
        <>
            <Navbar/>
            <main style={{marginTop: '100px'}} className="container">
                <div className="row">
                    <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2 animated fadeIn delay-1s">
                        <div style={{textAlign: 'justify', fontSize: '18px', marginBottom: '50px'}}>
                            <p style={{marginTop: '30px'}} className="property-head fadeInUp" data-wow-delay="0.3s">Sign
                                Up
                                For
                                EFIEWURA</p>
                            <p style={{fontSize: '1.1em'}} className="fadeInUp" data-wow-delay="0.5s">
                                Sign up to EFIEWURA so you can have access to more functionality and also, so that we
                                can connect with you.
                            </p>
                            <p style={{fontSize: '1.1em'}} className="fadeInUp" data-wow-delay="0.7s">Already have an
                                account?
                                Just
                                <NavLink style={{fontWeight: 'bold'}} id="login-link" to="/login"> Login</NavLink>
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} style={{marginBottom: '70px'}}
                              className="form-horizontal custom-form">
                            <h5 className="custom-form-subhead">Please enter your details</h5>
                            {
                                error ?
                                    <h5 style={{color: 'red'}}>Something went wrong. Make sure you typed in the right
                                        email and password</h5> : <></>
                            }
                            <FormInputText handleChange={handleChange} type='text' name='displayName' id='displayName'
                                           label='Name' onBlur={validateSignUpName}/>
                            <p className='red o-100'>{errorMessages.nameError}</p>

                            <FormInputText handleChange={handleChange} type='email' name='email' id='email'
                                           label='Email' onBlur={validateSignUpMail}/>
                            <p className='red o-100'>{errorMessages.mailError}</p>

                            <input onChange={handleFileChange} name="profile_img" type="file" id="single-file-upload"
                                   hidden="hidden" accept='image/*'/>
                            <label className="upload-button-label" htmlFor="single-file-upload">
                                <div id="profileUpBtn" className="btn btn-fab btn-round btn-primary">
                                    <i className="material-icons">attach_file</i>
                                </div>
                                <div className="upload-text">Click here to upload a profile image</div>
                            </label>
                            {
                                profile_img.name
                                    ? <div className="uploaded-images">
                                        <h5>You uploaded:</h5>
                                        <ul>
                                            <li>{profile_img.name}</li>
                                        </ul>
                                    </div>
                                    : <></>
                            }

                            <FormInputText handleChange={handleChange} type='password' name='password' id='password'
                                           label='Password' onBlur={validateSignUpPassword}/>
                            <p className='red o-100'>{errorMessages.passwordError}</p>
                            <PasswordToggle unHide={showPass} toggleName='password'/>

                            <FormInputText handleChange={handleChange} type='password' name='confirmPassword'
                                           id='confirmPassword'
                                           label='Confirm Password' onBlur={validateSignUpConfirmPassword}/>
                            <p className='red o-100'>{errorMessages.confirmPasswordError}</p>
                            <PasswordToggle unHide={showPass} toggleName='confirmPassword'/>

                            <CustomButtonsContainer>
                                {
                                    loader ? <LoadingSpinner/> : <CustomButton type='submit'>Sign Up</CustomButton>
                                }
                                <CustomButton type='reset' inverted="true">Reset</CustomButton>
                            </CustomButtonsContainer>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    error: selectError,
    loader: selectLoadingUser
});

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
