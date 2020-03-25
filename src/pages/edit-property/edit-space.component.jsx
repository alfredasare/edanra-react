import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {selectDistricts, selectRegions} from "../../redux/static-data/static-data.selectors";
import {selectProperty} from "../../redux/properties/properties.selectors";
import {propertyEditStart} from "../../redux/property-upload/property-upload.actions";


const EditSpace = ({regions, districts, property, history, propertyEditStart}) => {

    const [propertyDetails, setPropertyDetails] = useState({
        uid: property.uid,
        name: property.name ? property.name : "",
        email: property.email,
        contact: property.contact,
        address: property.address,
        property_type: property.property_type,
        description: property.description ? property.description : "",
        region: property.region,
        district: property.district,
        town: property.town,
        price: property.price,
        negotiation_status: property.negotiation_status,
    });

    const {property_type, region, district, negotiation_status, ...otherPropertyDetails} = propertyDetails;

    const handleSubmit = event => {
        event.preventDefault();

        propertyEditStart(propertyDetails);
        history.push(`/dashboard`);
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setPropertyDetails({
            ...propertyDetails,
            [name]: value,
        });
    };

    return (
        <main className="container">
            <div className="row">
                <div className="col-sm-12 offset-sm-0 col-md-8 offset-md-2 animated fadeIn delay-1s">
                    <form onSubmit={handleSubmit} className="custom-form form-horizontal" encType="multipart/form-data">

                        <h2>Edit The Details For Your Listing</h2>
                        <h4>Fill the form below with the details of the particular property you want to host. To
                            make
                            transactions
                            easy make sure you input accurate information about the property
                        </h4>
                        <h5 className="custom-form-subhead">1. Please enter your details</h5>

                        <FormInputText value={otherPropertyDetails.name} handleChange={handleChange} type='text'
                                       name='name' id='name' label='Name'/>
                        <FormInputText value={otherPropertyDetails.email} handleChange={handleChange} type='email'
                                       name='email' id='email' label='Email'
                                       required/>
                        <FormInputText value={otherPropertyDetails.contact} handleChange={handleChange} type='tel'
                                       name='contact' id='contact'
                                       label='Contact' required/>
                        <FormInputText value={otherPropertyDetails.address} handleChange={handleChange} type='text'
                                       name='address' id='address'
                                       label='Address' required/>


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
                            <textarea value={otherPropertyDetails.description} onChange={handleChange}
                                      className="form-control" id="description" rows="2" name='description'/>
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

                        <FormInputText value={otherPropertyDetails.town} handleChange={handleChange} type='text'
                                       name='town' id='town' label='Town'
                                       required/>

                        <FormInputText value={otherPropertyDetails.price} handleChange={handleChange} type='number'
                                       name='price' id='price' label='Price'
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


                        <CustomButtonsContainer>
                            <CustomButton type='submit'>Update</CustomButton>
                            <CustomButton type='reset' inverted="true">Reset</CustomButton>
                        </CustomButtonsContainer>

                    </form>
                </div>
            </div>
        </main>
    );
};

const mapStateToProps = (state, ownProps) => ({
    districts: selectDistricts(state),
    regions: selectRegions(state),
    property: selectProperty(ownProps.match.params.uid)(state)
});

const mapDispatchToProps = dispatch => ({
    propertyEditStart: (editedDetails) => dispatch(propertyEditStart(editedDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSpace);
