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

const SignUp = ({signUpStart, error, loader}) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName : '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: '',
        address: ''
    });

    const {displayName, email, password, confirmPassword, contact, address} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        // Validation
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        signUpStart({displayName, email, password, contact, address});
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    };

    return (
        <main style={{marginTop: '100px'}} className="container">
            <div className="row">
                <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2 animated fadeIn delay-1s">
                    <div style={{textAlign: 'justify', fontSize: '18px', marginBottom: '50px'}}>
                        <p style={{marginTop: '30px'}} className="property-head fadeInUp" data-wow-delay="0.3s">Sign Up
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
                    <form onSubmit={handleSubmit} style={{marginBottom: '70px'}} className="form-horizontal custom-form">
                        <h5 className="custom-form-subhead">Please enter your details</h5>
                        {
                            error ? <h5 style={{color: 'red'}}>Something went wrong. Make sure you typed in the right email and password</h5> : <></>
                        }
                        <FormInputText handleChange={handleChange} type='text' name='displayName' id='displayName' label='Name' required/>

                        <FormInputText handleChange={handleChange} type='email' name='email' id='email' label='Email' required/>

                        <FormInputText handleChange={handleChange} type='password' name='password' id='password' label='Password' required/>

                        <FormInputText handleChange={handleChange} type='password' name='confirmPassword' id='confirmPassword'
                                       label='Confirm Password' required/>

                        <FormInputText handleChange={handleChange} type='tel' name='contact' id='contact' label='Contact' required/>

                        <FormInputText handleChange={handleChange} type='text' name='address' id='address' label='Address' required/>

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
