import React from "react";
import './provide-space.styles.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import FormInputText from "../../components/form-input-text/form-input-text.component";

const ProvideSpace = () => {

    return (
        <main className="container">
            <div className="row">
                <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2 animated fadeIn delay-1s">
                    <form className="custom-form form-horizontal">
                        <h2>Provide The Details For Your Listing</h2>
                        <h4>Fill the form below with the details of the particular property you want to host. To
                            make
                            transactions
                            easy make sure you input accurate information about the property
                        </h4>
                        <h5 className="custom-form-subhead">1. Please enter your details</h5>

                        <FormInputText type='text' name='name' id='name' label='Name' required/>
                        <FormInputText type='email' name='email' id='email' label='Email' required/>
                        <FormInputText type='tel' name='contact' id='contact' label='Contact' required/>
                        <FormInputText type='text' name='address' id='address' label='Address' required/>


                        <div className="form-group form-file-upload form-file-multiple">
                            <input type="file" multiple="" className="inputFileHidden"/>
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
                                    <button type="button" className="close"
                                            data-dismiss="alert">&times;</button>
                                    <strong>Required!</strong> Profile required to move on
                                </div>
                            </div>
                        </div>

                        <h5 className="custom-form-subhead">2. Please provide the details of your listing</h5>
                        <h5 style={{fontWeight: 'bold'}}>Property type</h5>
                        <div className="form-check form-check-radio">
                            <label htmlFor="house" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="house"
                                       value="house"/>
                                House
                                <span className="circle">
                                            <span className="check"/>
                                        </span>
                            </label>
                        </div>
                        <div className="form-check form-check-radio">
                            <label htmlFor="hotel" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="hotel"
                                       value="hotel"/>
                                Hotel
                                <span className="circle">
                                        <span className="check"/>
                                    </span>
                            </label>
                        </div>
                        <div className="form-check form-check-radio">
                            <label htmlFor="guest-house" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="guest-house"
                                       value="guest-house"/>
                                Guest House
                                <span className="circle">
                                            <span className="check"/>
                                        </span>
                            </label>
                        </div>
                        <div className="form-check form-check-radio">
                            <label htmlFor="hostel" className="form-check-label">
                                <input className="form-check-input" type="radio" name="type" id="hostel"
                                       value="hostel"/>
                                Hostel
                                <span className="circle">
                                            <span className="check"/>
                                        </span>
                            </label>
                        </div>

                        <FormInputText type='textarea' name='description' id='description' label='Description' rows='3'
                                       required/>


                        <div className="form-group">
                            <label style={{color: 'rgba(0,0,0,0.5)'}} htmlFor="region">Region</label>
                            <select className="form-control" data-style="btn btn-link" id="region" name="region"
                                    required>
                                <option value>Select an option</option>
                                <option value="AS">Ashanti</option>
                                <option value="BA">Brong-Ahafo</option>
                                <option value="CE">Central</option>
                                <option value="EA">Eastern</option>
                                <option value="GA">Greater Accra</option>
                                <option value="NO">Northern</option>
                                <option value="UE">Upper East</option>
                                <option value="UW">Upper West</option>
                                <option value="VO">Volta</option>
                                <option value="WE">Western</option>
                            </select>
                            <div id="regionAlert" className="alert alert-warning" style={{display: 'none'}}>
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Required!</strong> Region must be selected
                            </div>
                        </div>

                        <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating" htmlFor="host-address">District</label>
                            <input list="district" className="form-control" name="District" autoComplete="off"/>
                            <datalist id="district">
                                <option value="Adansi North District"/>
                                <option value="Bekwai Municipal District"/>
                                <option value="Tema Metropolitan District"/>
                                <option value="Shai Osudoku"/>
                                <option value="La Nkwantanang Madina Municipal District"/>
                                <option value="Ga West Municipal District"/>
                                <option value="Tolon District"/>
                            </datalist>
                        </div>

                        <FormInputText type='text' name='town' id='town' label='Town' required/>


                        <div className="form-group form-file-upload form-file-multiple">
                            <input type="file" multiple="" className="inputFileHidden"/>
                            <div className="input-group file-attachment">
                                <label className="bmd-label-floating"> Upload picture of property (Maximum of 5
                                    pictures)</label>

                                <button id="multUpBtn" type="button"
                                        className="btn btn-fab btn-round btn-primary">
                                    <i className="material-icons">layers</i>
                                    <div className="ripple-container"/>
                                </button>
                            </div>
                        </div>

                        <FormInputText type='number' name='price' id='price' label='Price' required/>

                        <h5 className="custom-form-subhead">4. Negotiation status</h5>
                        <div className="form-check form-check-radio">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="negotiation" id="negotiable"
                                       value="negotiable" checked/>
                                Negotiable
                                <span className="circle">
                                            <span className="check"/>
                                        </span>
                            </label>
                        </div>
                        <div className="form-check form-check-radio">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="negotiation"
                                       id="non-negotiable" value="non-negotiable"/>
                                Non-negotiable
                                <span className="circle">
                                            <span className="check"/>
                                        </span>
                            </label>
                        </div>
                        <div style={{marginTop: '30px', marginBottom: '30px'}} className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" value="" name="agree"/>
                                By checking this, you hereby agree with all the terms and conditions associated
                                with using the
                                Efiewura Platform
                                <span className="form-check-sign">
                                            <span className="check"/>
                                        </span>
                            </label>
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

export default ProvideSpace;
