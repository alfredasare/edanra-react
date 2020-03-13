import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {compose} from "redux";
import {selectIsPropertiesLoaded} from "../../redux/properties/properties.selectors";
import ViewSpace from "./view-space.component";
import WithSpinner from "../../components/withSpinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsPropertiesLoaded(state)
});

const ViewSpaceContainer = compose(connect(mapStateToProps),WithSpinner)(ViewSpace);

export default ViewSpaceContainer;
