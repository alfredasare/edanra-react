import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {compose} from "redux";
import {selectIsPropertiesLoaded} from "../../redux/properties/properties.selectors";
import WithSpinner from "../../components/withSpinner/with-spinner.component";
import EditSpace from "./edit-space.component";


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsPropertiesLoaded(state)
});

const EditSpaceContainer = compose(connect(mapStateToProps), WithSpinner)(EditSpace);

export default EditSpaceContainer;
