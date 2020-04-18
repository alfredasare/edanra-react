import PaymentActionTypes from "./payment.types";

const INITIAL_STATE = {
    isUpdating: false,
    error: undefined,
};

const paymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PaymentActionTypes.UPDATE_LAST_DATE_PAID_START:
            return {
                ...state,
                isUpdating: true
            };

        case PaymentActionTypes.UPDATE_LAST_DATE_PAID_SUCCESS:
            return {
                ...state,
                isUpdating: false,
            };

        case PaymentActionTypes.UPDATE_LAST_DATE_PAID_FAILURE:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default paymentReducer;