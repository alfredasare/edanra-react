import React from "react";
import './contact.styles.scss';
import './animate.css';
import CustomButton from "../../components/custom-button/custom-button.component";
import Navbar from "../../components/navbar/navbar.component";

const ContactPage = () => {


    return (
        <>
            <Navbar/>
            <div className='cover-img'>
                <div>
                    <h2>Contact Us</h2>
                    <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us... </p>
                </div>

            </div>
            <div className='container-fluid card-container'>
                <div className='row contact-row'>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 card'>
                        <i className='fa fa-envelope animated jello'/>
                        <h5>Mail Efiewura</h5>
                        <p>Want to send us feedback? Just send a mail to Efiewura and we will respond as soon as
                            possible.</p>
                        <a href="mailto:efiewura18@gmail.com" target='_blank' rel="noopener noreferrer"><CustomButton>send mail</CustomButton></a>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 card'>
                        <i className='fa fa-comments animated jello delay-1s'/>
                        <h5>Reach us on social media</h5>
                        <p>Follow, send messages, comment and like our social media pages.</p>
                        <div className='social'>
                            <a href="#"><i className='fa fa-facebook'/></a>
                            <a href="#"><i className='fa fa-instagram'/></a>
                            <a href="#"><i className='fa fa-twitter'/></a>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 card location'>
                        <i className='fa fa-map-marker animated jello delay-2s'/>
                        <h5>Locate Efiewura</h5>
                        <p>Tema Community 12</p>
                        <p>Peregrino Aryee street</p>
                        <p>House no. 12</p>
                        <div className='call-header'>
                            <h6> Or call</h6>
                            <i className='fa fa-phone'/>
                        </div>
                        <p className='bolden'>+233 233 233 233</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
