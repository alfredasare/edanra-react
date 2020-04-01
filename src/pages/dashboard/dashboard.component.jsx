import React, {useEffect} from "react";
import {connect} from 'react-redux';
import './dashboard.styles.scss';
import DashboardCardCollection from "../../components/dashboard-card-collection/dashboard-card-collection.component";
import {fetchPropertiesStart} from "../../redux/properties/properties.actions";
import {createStructuredSelector} from "reselect";
import {selectIsPropertyEdited} from "../../redux/property-upload/property-upload.selectors";
import ProfileCard from "../../components/profile-card/profile-card.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {checkUserSession} from "../../redux/user/user.actions";

const Dashboard = ({fetchPropertiesStart, isPropertyEdited, currentUser, checkUserSession}) => {

    useEffect(() => {
        checkUserSession();
        fetchPropertiesStart()
    }, [isPropertyEdited]);

    return (
        <div id="dashboard" className="container">
            <ProfileCard currentUser={currentUser}/>
            <h2 style={{marginTop: '2em'}}>Manage all your ads from your dashboard</h2>
            <h2 style={{marginTop: '20px'}}>Uploaded Ads</h2>
            <DashboardCardCollection/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isPropertyEdited: selectIsPropertyEdited,
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    fetchPropertiesStart: () => dispatch(fetchPropertiesStart()),
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
