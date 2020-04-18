import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {compose} from "redux";
import {selectIsPropertyFetching} from "../../redux/properties/properties.selectors";
import WithSpinner from "../../components/withSpinner/with-spinner.component";
import Payment from "./payment.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsPropertyFetching
});

const PaymentContainer = compose(connect(mapStateToProps), WithSpinner)(Payment);

export default PaymentContainer;