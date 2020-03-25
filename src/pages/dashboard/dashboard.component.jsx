import React, {useEffect} from "react";
import {connect} from 'react-redux';
import './dashboard.styles.scss';
import DashboardCardCollection from "../../components/dashboard-card-collection/dashboard-card-collection.component";
import {fetchPropertiesStart} from "../../redux/properties/properties.actions";
import {createStructuredSelector} from "reselect";
import {selectIsPropertyEdited} from "../../redux/property-upload/property-upload.selectors";

const Dashboard = ({fetchPropertiesStart, isPropertyEdited}) => {

    useEffect(() => {
        fetchPropertiesStart()
    }, [isPropertyEdited]);

    return (
        <div id="dashboard" className="container">
            <h2>Manage all your ads from your dashboard</h2>
            <h2 style={{marginTop: '50px'}}>Uploaded Ads</h2>
            <DashboardCardCollection/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isPropertyEdited: selectIsPropertyEdited
});

const mapDispatchToProps = dispatch => ({
    fetchPropertiesStart: () => dispatch(fetchPropertiesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
