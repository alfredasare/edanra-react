import React from "react";
import './dashboard-info.styles.scss';

const DashboardInfoCard = ({title, info}) => {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="card">
                <div style={{textAlign: 'center'}} className="card-body">
                    <div className="dash-text">
                        <p className="dash-title">{title}</p>
                        <p className="dash-info">{info}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardInfoCard;
