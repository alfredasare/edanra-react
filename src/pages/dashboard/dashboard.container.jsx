import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {compose} from "redux";
import {selectIsPropertiesLoaded} from "../../redux/properties/properties.selectors";
import WithSpinner from "../../components/withSpinner/with-spinner.component";
import Dashboard from "./dashboard.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsPropertiesLoaded(state)
});

const DashboardContainer = compose(connect(mapStateToProps), WithSpinner)(Dashboard);

export default DashboardContainer;
