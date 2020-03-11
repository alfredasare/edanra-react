import React from "react";
import './contact.styles.scss';
import Header from "../../components/header/header.component";
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";

const ContactPage = () => {

    const url = "https://firebasestorage.googleapis.com/v0/b/efiewura-db-60044.appspot.com/o/site-images%2Ftelephone.jpg?alt=media&token=971ee471-8371-42a6-bfda-0e7e880bad08";

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
                    <form id="contact-form" className="custom-form" action="">
                        <FormInputText type='text' name='username' id='username' label='Name' required/>
                        <FormInputText type='email' name='email' id='email' label='Email' required/>
                        <FormInputText type='text' name='subject' id='subject' label='Subject' required/>
                        <FormInputText type='textarea' name='message' id='message' label='Message' required/>

                        <CustomButtonsContainer>
                            <CustomButton type='submit'>Send</CustomButton>
                            <CustomButton type='reset' inverted="true">Reset</CustomButton>
                        </CustomButtonsContainer>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
