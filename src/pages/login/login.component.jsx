import React from "react";
import {NavLink} from "react-router-dom";
import './login.styles.scss';
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";

const LoginPage = () => {

    return (
        <div style={{marginTop: '60px'}} className="container-fluid">
            <div className="row mh-100vh">
                <div
                    className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0"
                    id="login-block">
                    <div className="m-auto w-lg-75 w-xl-50">
                        <h2>Login To EFIEWURA</h2>
                        <form>
                            <FormInputText type='text' name='email' id='email' label='Email' required/>
                            <FormInputText type='password' name='password' id='password' label='Password' required/>



                                <CustomButton type='submit'>Sign In</CustomButton>
                                <CustomButton id="google-signin" type='button'>
                                    <i className="fa fa-google" /> Sign In With Google
                                </CustomButton>

                        </form>
                        <div style={{fontSize: '1.3em'}} className="mt-3 mb-0">
                            <p style={{fontSize: '1.3em'}}>Don't have an account? </p>
                            <NavLink to="/signup" className="" style={{color: '#00695C', fontWeight: 'bold'}}>Sign up
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
    );
};

export default LoginPage;
