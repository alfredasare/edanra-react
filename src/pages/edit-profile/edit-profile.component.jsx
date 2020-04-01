import React, {useState} from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser, selectError, selectUpdatingUser} from "../../redux/user/user.selectors";
import './edit-profile.styles.scss';
import {deleteProfileImageStart, editUserStart} from "../../redux/user/user.actions";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const EditProfile = ({currentUser, error, isUpdating, updateProfileStart, deleteProfileImageStart, history}) => {

    const default_img = 'https://firebasestorage.googleapis.com/v0/b/efiewura-db-60044.appspot.com/o/site-images%2Favatar-placeholder_v0ecjm.png?alt=media&token=ec952423-c148-409e-ab6e-15bf295424bd';
    const temp_profile_image = currentUser.profile_img ? currentUser.profile_img : default_img;

    const [userCredentials, setUserCredentials] = useState({
        displayName: currentUser.displayName,
        email: currentUser.email,
        contact: currentUser.contact ? currentUser.contact : '',
        address: currentUser.address ? currentUser.address : '',
        profile_img: temp_profile_image,
        id: currentUser.id
    });

    const {displayName, email, contact, address, profile_img, id} = userCredentials;

    const handleSubmit = event => {
        event.preventDefault();

        if (typeof profile_img === "object") {
            deleteProfileImageStart(temp_profile_image);
        }

        updateProfileStart({displayName, email, contact, address, profile_img, id});

        setTimeout(() => {history.push(`/dashboard`);},2000);

        console.log({displayName, email, contact, address, profile_img, id});
    };

    const handleChange = event => {
        const {name, value} = event.target;
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

    return (
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
                          className="form-horizontal custom-form">
                        {
                            error ?
                                <h5 style={{color: 'red'}}>Something went wrong. Make sure you typed in the right email
                                    and password</h5> : <></>
                        }

                        <div className="img-edit-preview">
                            <img className="img-fluid rounded-img rounded-circle" src={typeof profile_img === 'object' ? URL.createObjectURL(profile_img) : profile_img} alt=""/>
                        </div>
                        <FormInputText value={displayName} handleChange={handleChange} type='text' name='displayName'
                                       id='displayName' label='Name'/>

                        <FormInputText value={email} handleChange={handleChange} type='email' name='email' id='email'
                                       label='Contact Email'/>

                        <input onChange={handleFileChange} name="profile_img" type="file" id="single-file-upload"
                               hidden="hidden" accept='image/*'/>
                        <label className="upload-button-label" htmlFor="single-file-upload">
                            <div id="profileUpBtn" className="btn btn-fab btn-round btn-primary">
                                <i className="material-icons">attach_file</i>
                            </div>
                            <div className="upload-text">Click here to update profile image</div>
                        </label>


                        <FormInputText value={contact} handleChange={handleChange} type='tel' name='contact'
                                       id='contact' label='Contact'/>


                        <FormInputText value={address} handleChange={handleChange} type='text' name='address'
                                       id='address' label='Address'/>


                        <CustomButtonsContainer>
                                {
                                    isUpdating ? <LoadingSpinner/> : <CustomButton type='submit'>Update</CustomButton>
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
    currentUser: selectCurrentUser,
    error: selectError,
    isUpdating: selectUpdatingUser,
});

const mapDispatchToProps = dispatch => ({
    updateProfileStart: userDetails => dispatch(editUserStart(userDetails)),
    deleteProfileImageStart: imageUrl => dispatch(deleteProfileImageStart(imageUrl)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
