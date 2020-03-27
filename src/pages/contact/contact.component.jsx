import React, {useState} from "react";
import './contact.styles.scss';
import Header from "../../components/header/header.component";
import FormInputText from "../../components/form-input-text/form-input-text.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomButtonsContainer from "../../components/custom-buttons-container/custom-buttons-container.component";
import {
    contactValidate,
    errorObject,
    validateMail,
    validateMessage,
    validateName,
    validateSubject
} from "../../assets/js/validation";

const ContactPage = () => {

    const [errorMessages, setErrorMessages] = useState({
        nameError: '',
        mailError: '',
        subjectError: '',
        messageError: '',
    });

    const validateContactName = event =>{
        validateName(event);
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessages({...errorMessages, [error]: message});
    };
    const validateContactMail = event => {
        validateMail(event);
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessages({...errorMessages, [error]: message});
    };
    const validateContactSubject = event => {
        validateSubject(event);
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessages({...errorMessages, [error]: message});
    };
    const validateContactMessage = event =>{
        validateMessage(event);
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessages({...errorMessages, [error]: message});
    };

    // Validation start
    const handleSubmit = async event => {
        event.preventDefault();
        const isValid = contactValidate(event);
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessages({...errorMessages, [error]: message});

        if (isValid) {
            alert('send message');
            //send message
        }else{
            alert('something wrong!');
        }
    };
    // validation end

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
                    <form id="contact-form" className="custom-form" action="" noValidate onSubmit={handleSubmit}>
                        <FormInputText type='text' name='username' id='username' label='Name'
                                       onChange={validateContactName} onBlur={validateContactName}/>
                        <p className='red o-100'>{errorMessages.nameError}</p>
                        <FormInputText type='email' name='email' id='email' label='Email'
                                       onChange={validateContactMail} onBlur={validateContactMail}/>
                        <p className='red o-100'>{errorMessages.mailError}</p>
                        <FormInputText type='text' name='subject' id='subject' label='Subject'
                                       onChange={validateContactSubject} onBlur={validateContactSubject}/>
                        <p className='red o-100'>{errorMessages.subjectError}</p>
                        <FormInputText type='textarea' name='message' id='message' label='Message'
                                       onChange={validateContactMessage} onBlur={validateContactMessage}/>
                        <p className='red o-100'>{errorMessages.messageError}</p>

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
