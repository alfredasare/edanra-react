import React from "react";
import './footer.styles.scss';
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="row" style={{textAlign: 'center'}}>
                    <div className="col-md-4" style={{marginTop: '20px'}}>
                        Copyright &copy; 2020 edanra
                    </div>
                    <div className="col-md-4" style={{marginTop: '20px'}}>
                        <Link to="/terms" className="text-decoration-none">
                            Terms & Conditions
                        </Link>
                    </div>
                    <div className="col-md-4" style={{marginTop: '20px'}}>
                        <div id="footer-social" className="wow fadeInUp" data-wow-delay="0.9s">
                            <a rel="noopener noreferrer" href="https://twitter.com/edanragh" target="_blank">
                                <i className="fa fa-twitter"/>
                            </a>
                            <a rel="noopener noreferrer" href="https://web.facebook.com/Edanra-105026167849323/" target="_blank">
                                <i className="fa fa-facebook-square"/>
                            </a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/edanragh" target="_blank">
                                <i className="fa fa-instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
