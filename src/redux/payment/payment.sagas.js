import {takeLatest, call, put, all} from 'redux-saga/effects';
import PaymentActionTypes from "./payment.types";
import {updateLastDatePaidFailure, updateLastDatePaidSuccess} from "./payment.actions";
import {firestore} from "../../firebase/firebase.utils";


export function* updateLastPaidDate({payload}) {
    const {property, lastDatePaid, subscription_type} = payload;
    const {last_date_paid, uid} = property;

    try {
        last_date_paid ? yield firestore.collection("properties").doc(uid).update({
            ...payload,
            last_date_paid: lastDatePaid,
            subscription_type
        }): yield firestore.collection("properties").doc(uid).set({
            last_date_paid: lastDatePaid,
            subscription_type
        }, {merge: true});

        yield put(updateLastDatePaidSuccess({lastDatePaid, subscription_type}));
    } catch (error) {
        yield put(updateLastDatePaidFailure(error));
    }
}

export function* onUpdateLastDatePaidStart() {
    yield takeLatest(PaymentActionTypes.UPDATE_LAST_DATE_PAID_START, updateLastPaidDate);
}

export function* paymentSagas() {
    yield all([
        call(onUpdateLastDatePaidStart)
    ]);
}