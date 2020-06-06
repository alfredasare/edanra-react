import React, {useState} from "react";
import {connect} from 'react-redux';
import {useRavePayment} from "react-ravepayment";
import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import './payment.styles.scss';
import PayCard from '../../assets/img/payment.png'
import MobileMoney from '../../assets/img/smartphone.png';
import CustomButton from "../../components/custom-button/custom-button.component";
import {NavLink} from "react-router-dom";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectProperty} from "../../redux/properties/properties.selectors";
import {Helmet} from "react-helmet";
import {updateLastDatePaidStart} from "../../redux/payment/payment.actions";
import ScrollToTop from "../../utils/scroll-to-top";

const Payment = ({property, history, updatePaymentData}) => {

    const [billingInfo, setBillingInfo] = useState({
        cycle: '',
        pay: '',
        error: '',
        amount: 0,
        subscription_type: ''
    });

    const myDate = [];
    const date = new Date();
    myDate.push(date.getDate());
    myDate.push(date.getMonth() + 1);
    myDate.push(date.getFullYear());
    const renewalDate = myDate.join('-');
    const lastDatePaid = date.toString();

    const setBillingCycle = (event) => {
        if (event.target.value === 'annual') {
            setBillingInfo({
                ...billingInfo,
                cycle: 'Annual',
                pay: 'Ghana cedis 100',
                amount: 100,
                subscription_type: 'annual',
                error: '',
            });
        } else if (event.target.value === 'six_months') {
            setBillingInfo({
                ...billingInfo,
                cycle: 'Six(6) months',
                pay: 'Ghana cedis 40',
                amount: 40,
                subscription_type: 'six_months',
                error: '',
            });
        } else if (event.target.value === 'three_months') {
            setBillingInfo({
                ...billingInfo,
                cycle: 'Three(3) months',
                pay: 'Ghana cedis 20',
                amount: 20,
                subscription_type: 'three_months',
                error: '',
            });
        }
    };

    const config = {
        txref: "MC-" + Date.now(),
        customer_firstname: property.username,
        customer_email: property.email,
        customer_phone: property.contact,
        amount: billingInfo.amount,
        PBFPubKey: "FLWPUBK_TEST-ef6e4a21fdaae3b8c5e954b5a9750f49-X",
        currency: "GHS",
        country: "GH",
        production: false,
    };

    const {initializePayment} = useRavePayment(config);

    const onPaymentSuccess = () => {
        const {subscription_type} = billingInfo;
        updatePaymentData({property, lastDatePaid, subscription_type});
        history.push(`/dashboard`);
    };

    const onModalClose = () => {
        // console.log("Modal closed")
    };

    const handlePayment = event => {
        let isValid;
        event.preventDefault();
        if (billingInfo.cycle === '') {
            setBillingInfo({...billingInfo, error: 'Please choose a billing cycle'});
            isValid = false;
        } else {
            isValid = true;
        }
        isValid ? initializePayment(onPaymentSuccess, onModalClose) : console.log();
    };


    return (
        <>
            <Helmet>
                <title>Complete Your Payment To Host Your Ad</title>
            </Helmet>
            <ScrollToTop/>
            <Navbar/>
            <form onSubmit={handlePayment}>
                <div className='main-content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7'>
                                <h2>Checkout</h2>
                                <div className='divider'/>
                                <h4>Choose your billing cycle</h4>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 bill-cycle'>
                                            <label>
                                                <input type="radio" name="cycle" id="three_months" value="three_months"
                                                       onClick={setBillingCycle}/>
                                                Bill 3 Months
                                            </label>
                                            <p className='make-teal'>GH cedis 20 / 3 months</p>
                                        </div>
                                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 bill-cycle'>
                                            <label>
                                                <input type="radio" name="cycle" id="six_months" value="six_months"
                                                       onClick={setBillingCycle}/>
                                                Bill 6 Months
                                            </label>
                                            <p className='make-teal'>GH cedis 40 / 6 months</p>
                                        </div>
                                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 bill-cycle'>
                                            <label>
                                                <input type="radio" id="annual" name="cycle" value="annual"
                                                       onClick={setBillingCycle}/>
                                                Bill Yearly
                                            </label>
                                            <p className='make-teal'>GH cedis 100 / year</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='divider'/>
                                <h4>Our Payment Options</h4>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 pay-style'>
                                            <img src={PayCard} alt="payment card" className='mobile-money'/>
                                            <div className="pay-options">
                                                <p>Visa card</p>
                                                <div className="point"/>
                                                <p>Mastercard</p>
                                                <div className="point"/>
                                                <p>Verge</p>
                                            </div>
                                        </div>
                                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 pay-style'>
                                            <img src={MobileMoney} alt="mobile money" className='mobile-money'/>
                                            <div className="pay-options">
                                                <p>MTN</p>
                                                <div className="point"/>
                                                <p>Vodafone</p>
                                                <div className="point"/>
                                                <p>Airtel-Tigo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-5 col-lg-4'>
                                <div className='card'>
                                    <div className='banner'/>
                                    <div className='checkout-content'>
                                        <h4>Payment Summary</h4>
                                        <div className='checkout-list'>
                                            <p>Name</p>
                                            <p>{property.username}</p>
                                            {/*    TODO: currentuser.displayName not working for me*/}
                                        </div>
                                        <div className='checkout-list'>
                                            <p>Billing Date</p>
                                            <p>{renewalDate}</p>
                                        </div>
                                        <div className='checkout-list'>
                                            <p>Billing Cycle</p>
                                            <p>{billingInfo.cycle}</p>
                                        </div>
                                        <div className='checkout-list'>
                                            <p>Amount to be paid</p>
                                            <p>{billingInfo.pay}</p>
                                        </div>
                                        <div className='checkout-list'>
                                            <i className='fa fa-check-circle'/>
                                            <span>By completing the purchase, I agree with Edanra's
                                                <NavLink style={{color: "#004D40", cursor: 'pointer'}} to='/terms'> terms of service</NavLink>
                                            </span>
                                        </div>
                                        <CustomButton type='submit' style={{width: '100%'}}>Make payment</CustomButton>
                                        <p className='bill-error'>{billingInfo.error}</p>
                                        {/*    TODO: validation for submit to check cycle*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Footer/>
        </>
    )
};

const mapStateToProps = (state, ownProps) => ({
    currentUser: selectCurrentUser,
    property: selectProperty(ownProps.match.params.id)(state),
});

const mapDispatchToProps = dispatch => ({
    updatePaymentData: (data) => dispatch(updateLastDatePaidStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
