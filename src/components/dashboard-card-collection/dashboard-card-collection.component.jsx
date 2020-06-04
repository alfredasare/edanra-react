import React from "react";
import './dashboard-card-collection.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectPropertiesForDashboard} from "../../redux/properties/properties.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import DashboardAdCard from "../dashboard-ad-cards/dashboard-ad-card.component";
import DashboardInfoCard from "../dashboard-info/dashboard-info.component";
import {dateChecker} from "../../utils/date";

const DashboardCardCollection = ({currentUser, allProperties}) => {
    const filterByUser = allProperties.filter((property) => {
        return property.user_id === (currentUser && currentUser.id)
    });

    const filterByHosted = filterByUser.filter((property) => {
        const subscription_type = property.subscription_type ? property.subscription_type :'free_three';
        const renew_date = property.last_date_paid ? new Date(property.last_date_paid) : new Date('2020-10-31');
        const {status} = dateChecker(new Date(property.date_uploaded), subscription_type, renew_date);
        return status === "Hosted"
    }).length;

    const filterByPending = filterByUser.filter((property) => {
        const subscription_type = property.subscription_type ? property.subscription_type :'free_three';
        const renew_date = property.last_date_paid ? new Date(property.last_date_paid) : new Date('2020-10-31');
        const {status} = dateChecker(new Date(property.date_uploaded), subscription_type, renew_date);
        return status === "Pending"
    }).length;


    const dashboardCards = filterByUser.length > 0 ?
        filterByUser.map((property) => (
                <DashboardAdCard key={property.uid} property={property}/>
            )
        ) :
        <div className="container" id="no-ads-msg">
            <img src="https://img.icons8.com/ios/100/000000/sad-male.png" alt="sad face"/>
            <h3>You have hosted no ads</h3>
            <h4>Its not too late. <Link style={{textDecoration: 'underline'}} to="/provide-space">Click here</Link> to
                start</h4>
        </div>;

    return (
        <>
            <div className="row">
                <DashboardInfoCard title="Uploaded Ads" info={filterByUser.length}/>
                <DashboardInfoCard title="Ads Hosted" info={filterByHosted}/>
                <DashboardInfoCard title="Ads Pending" info={filterByPending}/>
            </div>
            <div className="row">
                {dashboardCards}
            </div>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    allProperties: selectPropertiesForDashboard,
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(DashboardCardCollection);
