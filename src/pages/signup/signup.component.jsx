import React from "react";
import {NavLink} from "react-router-dom";
import './signup.styles.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";

const SignUp = () => {

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
                        <p style={{fontSize: '1.1em'}} className="fadeInUp" data-wow-delay="0.7s">Already have an account?
                            Just
                            <NavLink style={{fontWeight: 'bold'}} id="login-link" to="/login"> Login</NavLink>
                        </p>
                    </div>
                    <form style={{marginBottom: '70px'}} className="form-horizontal custom-form">
                        <h5 className="custom-form-subhead">Please enter your details</h5>

                        <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating" htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name"/>
                        </div>

                        <h5 style={{fontWeight: 'bold'}}>Gender</h5>
                        <div className="form-check form-check-radio">
                            <label htmlFor="male" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="male"
                                       value="house"/>
                                Male
                                <span className="circle">
                                        <span className="check"/>
                                    </span>
                            </label>
                        </div>
                        <div className="form-check form-check-radio">
                            <label htmlFor="female" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="female"
                                       value="hotel"/>
                                Female
                                <span className="circle">
                                        <span className="check"/>
                                    </span>
                            </label>
                        </div>

                        <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating" htmlFor="host-email">Email</label>
                            <input type="email" className="form-control" id="host-email" name="email"/>
                        </div>

                        <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating" htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password"/>
                        </div>

                        <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating" htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" className="form-control" id="confirm-password"
                                   name="confirm-password"/>
                        </div>

                        <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating" htmlFor="host-contact">Contact Number</label>
                            <input type="tel" className="form-control" id="host-contact" name="number" required/>
                            <div id="numberAlert" className="alert alert-warning" style={{display: 'none'}}>
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Required!</strong> Number required to move on
                            </div>
                            <div id="numberError" className="alert alert-danger" style={{display: 'none'}}>
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Wrong Format!</strong> Number format error
                            </div>
                        </div>

                        <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating" htmlFor="host-address">Address</label>
                            <input type="text" className="form-control" id="host-address" name="Address"/>
                        </div>

                        <div className="form-group form-file-upload form-file-multiple">
                            <input type="file" multiple="" className="inputFileHidden" />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <div className="input-group file-attachment">
                                                <label className="bmd-label-floating"> Upload Profile</label>
                                                <button id="profileUpBtn" type="button"
                                                        className="btn btn-fab btn-round btn-primary">
                                                    <i className="material-icons">attach_file</i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="profileAlert" className="alert alert-warning" style={{display: 'none'}}>
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>Required!</strong> Profile required to move on
                                    </div>
                                </div>
                        </div>

                        <CustomButtonsContainer>
                            <CustomButton type='submit'>Send</CustomButton>
                            <CustomButton type='reset' inverted>Reset</CustomButton>
                        </CustomButtonsContainer>
                    </form>
                </div>
            </div>
        </main>
);
};

export default SignUp;
