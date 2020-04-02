import React from "react";
import './error-page.styles.scss';
import '../contact/animate.css';

const ErrorPage = () => {

    return (
        <div id="err-main-div">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 main-col">
                        <div className="row">
                            <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5 error">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/efiewura-db-60044.appspot.com/o/site-images%2Ferror.png?alt=media&token=ce6a9278-4991-4b4c-9644-6d076ff074c3"
                                    alt="404_image" className='animated swing delay-3s'/>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-5 col-lg-5 error-message">
                                <h1>404</h1>
                                <h2>Oooooppsss...</h2>
                                <h3>Something seems broken</h3>
                                <a href="/">
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
