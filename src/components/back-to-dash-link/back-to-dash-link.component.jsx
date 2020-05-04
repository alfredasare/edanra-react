import React from "react";
import {Link} from "react-router-dom";

const BackToDashLink = ({visibility}) => (
    <div style={{'visibility': `${visibility}`}} className="dashboard-link">
        <Link to={'/dashboard'}>Back To Dashboard</Link>
    </div>
);

export default BackToDashLink;