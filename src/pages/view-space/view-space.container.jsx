import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {compose} from "redux";
import {selectIsPropertyFetching} from "../../redux/properties/properties.selectors";
import WithSpinner from "../../components/withSpinner/with-spinner.component";
import ViewSpace from "./view-space.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsPropertyFetching
});

const ViewSpaceContainer = compose(connect(mapStateToProps),WithSpinner)(ViewSpace);

export default ViewSpaceContainer;
