import React from "react";
import './hosting-steps.styles.scss';
import {Link} from "react-router-dom";

const HostingSteps = () => {

    return (
        <div style={{marginTop: '70px'}} className="container">
            <div className="row">
                <h2 style={{marginLeft: '10px', marginBottom: '30px', fontSize: '2.5em', fontWeight: 'bold'}}>Renting made easy</h2>
            </div>
            <div className="row">
                <div className="col-md-4 step-container">
                    <div className="step-icon">
                        <i className="material-icons">looks_one</i>
                    </div>
                    <div className="step-head">
                        <h3>Sign up on <span className="teal-head">edanra</span></h3>
                    </div>
                    <div className="step-content">
                        <p>
                            Simply click on the sign in link on the navigation bar to get started.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 step-container">
                    <div className="step-icon">
                        <i className="material-icons">looks_two</i>
                    </div>
                    <div className="step-head">
                        <h3>List your property</h3>
                    </div>
                    <div className="step-content">
                        <p>
                            From your dashboard, you can get started on putting up an ad by filling the necessary details or by clicking 'host your property' on the navigation after signing in.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 step-container">
                    <div className="step-icon">
                        <i className="material-icons">looks_3</i>
                    </div>
                    <div className="step-head">
                        <h3>Manage your listing </h3>
                    </div>
                    <div className="step-content">
                        <p>
                            Control all your uploaded ads from your dashboard.
                        </p>
                        <Link to="/signup">
                            Click here to get started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostingSteps;