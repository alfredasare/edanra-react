import React from "react";
import './dashboard.styles.scss';
import DashboardCardCollection from "../../components/dashboard-card-collection/dashboard-card-collection.component";

const Dashboard = () => {


    return (
        <div id="dashboard" className="container">
            <h2>Manage all your ads from your dashboard</h2>
            <h2 style={{marginTop: '50px'}}>Uploaded Ads</h2>
            <DashboardCardCollection/>
        </div>
    );
};



export default Dashboard;
