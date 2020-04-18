import PaymentActionTypes from "./payment.types";

export const updateLastDatePaidStart = paymentData => ({
    type: PaymentActionTypes.UPDATE_LAST_DATE_PAID_START,
    payload: paymentData
});

export const updateLastDatePaidSuccess = paymentData => ({
    type: PaymentActionTypes.UPDATE_LAST_DATE_PAID_SUCCESS,
    payload: paymentData
});

export const updateLastDatePaidFailure = error => ({
    type: PaymentActionTypes.UPDATE_LAST_DATE_PAID_SUCCESS,
    payload: error
});