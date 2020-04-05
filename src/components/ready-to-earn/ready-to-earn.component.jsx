import React from "react";
import './ready-to-earn.styles.scss';
import {Link} from "react-router-dom";

const ReadyToEarn = () => {

    return (
        <div style={{marginTop: '50px'}} className="container-fluid">
            <div className="row misc-content-bg">
                <div className="misc-content">
                    <h2>Want to start hosting ads? </h2>
                    <div className="get-started">
                        <Link to="/signup">Get started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadyToEarn;