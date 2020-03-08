import React from "react";
import './error-page.styles.scss';
import {Link} from "react-router-dom";

const ErrorPage = () => {

    return (
        <div id="err-main-div">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 main-col">
                        <div className="row">
                            <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5 error">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/efiewura-db.appspot.com/o/site_images%2Ferror.png?alt=media&token=b490d0e6-cfd6-4c8f-8c6c-4ba7ab7595ff"
                                    alt="404_image"/>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5 error-message">
                                <h1>404</h1>
                                <h2>Oooooppsss...</h2>
                                <h3>Something seems broken</h3>
                                <a href="dashboard.html">
                                    <button>Go Home</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
