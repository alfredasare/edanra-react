import React from "react";
import './hosting-steps.styles.scss';
import {Link} from "react-router-dom";

const HostingSteps = () => {

    return (
        <div style={{marginTop: '70px'}} className="container">
            <div className="row">
                <h2 style={{marginLeft: '10px', marginBottom: '30px', fontSize: '2.5em', fontWeight: 'bold'}}>Hosting made easy</h2>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="step-icon">
                        <i className="material-icons">looks_one</i>
                    </div>
                    <div className="step-head">
                        <h3>Sign up on Efiewura</h3>
                    </div>
                    <div className="step-content">
                        <p>
                            Simply click on the sign in link on the navigation bar to get started.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="step-icon">
                        <i className="material-icons">looks_two</i>
                    </div>
                    <div className="step-head">
                        <h3>Put up an ad</h3>
                    </div>
                    <div className="step-content">
                        <p>
                            From your dashboard, you can get started on putting up an ad by filling the necessary details or by clicking provide space link on the navigation after signing in.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="step-icon">
                        <i className="material-icons">looks_3</i>
                    </div>
                    <div className="step-head">
                        <h3>Manage your ads</h3>
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