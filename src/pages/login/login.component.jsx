import React, {useState} from "react";
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import './login.styles.scss';
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {selectError, selectLoadingUser} from "../../redux/user/user.selectors";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import {errorObject, loginValidate, validateMail, validatePassword} from "../../assets/js/validation";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import PasswordToggle from "../../components/passwordToggle/passwordToggle.component";

const LoginPage = ({googleSignInStart, emailSignInStart, error, loader}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: '',});

    const [errorMessages, setErrorMessages] = useState({mailError: '', passwordError: ''});

    const {email, password} = userCredentials;

    const setError = () => {
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessages({...errorMessages, [error]: message});
    };

    // validation begin

    const validateLoginEmail = event => {
        validateMail(event);
        setError();
    };

    const validateLoginPassword = event => {
        validatePassword(event);
        setError();
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const isValid = loginValidate(event);
        setError();

        if (isValid) {
            emailSignInStart(email, password);
        }
    };

    const handleChange = event => {
        const {value, name} = event.target;
        if (event.target.name === 'email') {
            validateLoginEmail(event);
        } else if (event.target.name === 'password') {
            validateLoginPassword(event);
        }
        setCredentials({...userCredentials, [name]: value});
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
            <div style={{marginTop: '60px'}} className="container-fluid">
                <div className="row mh-100vh">
                    <div
                        className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0"
                        id="login-block">
                        <div className="m-auto w-lg-75 w-xl-50">
                            <h2>Login To EFIEWURA</h2>
                            {
                                error ?
                                    <h5 style={{color: 'red'}}>Something went wrong.</h5> : <></>
                            }
                            <form onSubmit={handleSubmit}>
                                <FormInputText handleChange={handleChange} type='email' name='email' id='email'
                                               label='Email' onBlur={validateLoginEmail}/>
                                <p className='red o-100'>{errorMessages.mailError}</p>

                                <FormInputText handleChange={handleChange} type='password' name='password' id='password'
                                               label='Password' onBlur={validateLoginPassword}/>
                                <p className='red o-100'>{errorMessages.passwordError}</p>
                                <div style={{marginBottom:'20px'}}>
                                    <PasswordToggle unHide={showPass} toggleName='password'/>
                                </div>


                                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                    {
                                        loader ? <LoadingSpinner/> : <CustomButton type='submit'>Sign In</CustomButton>
                                    }
                                    <CustomButton id="google-signin" type='button' onClick={googleSignInStart}>
                                        <i className="fa fa-google"/> Sign In With Google
                                    </CustomButton>
                                </div>


                            </form>
                            <div style={{fontSize: '1.3em'}} className="mt-3 mb-0">
                                <p style={{fontSize: '1.3em'}}>Don't have an account? </p>
                                <NavLink to="/signup" className="" style={{color: '#00695C', fontWeight: 'bold'}}>Sign
                                    up
                                    here.
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-end wow fadeIn" data-wow-delay="0.5s" id="bg-block"
                         style={{
                             background: `url(${require('../../assets/img/login.jpg')})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center center'
                         }}/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    error: selectError,
    loader: selectLoadingUser
});

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
