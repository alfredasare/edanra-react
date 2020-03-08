import React from "react";
import './contact.styles.scss';
import Header from "../../components/header/header.component";
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";

const ContactPage = () => {

    const url = "https://firebasestorage.googleapis.com/v0/b/efiewura-db.appspot.com/o/site_images%2Ftelephone.jpg?alt=media&token=82db0dc1-4e00-4a22-aaec-8c9c07b0a577";

    return (
        <>
            <Header title="Contact EFIEWURA" imageUrl={url}/>

            <section className="container animated fadeIn">
                <div>
                    <h2 className="form-head">We would love to hear from you</h2>
                    <p style={{fontSize: '1.2em', lineHeight: '1.5em'}}>EFIEWURA would love to hear any suggestions or
                        any
                        feedback you
                        would like to give. Your contributions would really help make the platform better for everyone.
                        Thank you
                        very much</p>
                </div>
                <div>
                    <form style={{width: '50%'}} className="custom-form" action="">
                        <FormInputText type='text' name='username' id='username' label='Name' required/>
                        <FormInputText type='text' name='email' id='email' label='Email' required/>
                        <FormInputText type='text' name='subject' id='subject' label='Subject' required/>
                        <FormInputText type='textarea' name='message' id='message' label='Message' required/>

                        <CustomButtonsContainer>
                            <CustomButton type='submit'>Send</CustomButton>
                            <CustomButton type='reset' inverted>Reset</CustomButton>
                        </CustomButtonsContainer>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
