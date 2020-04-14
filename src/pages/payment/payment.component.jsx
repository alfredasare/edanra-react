import React, {useState} from "react";
import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import './payment.styles.scss';
import Momo from '../../assets/img/momo.png';
import Vodafone from '../../assets/img/voda.png';
import Airtel from '../../assets/img/airtel.png';
import CustomButton from "../../components/custom-button/custom-button.component";
import {NavLink} from "react-router-dom";

const Payment = () => {
    const [billingInfo, setBillingInfo] = useState({
        cycle: '',
        pay: '',
        payType: '',
    });

    const myDate = [];
    const date = new Date();
    myDate.push(date.getDate());
    myDate.push(date.getMonth() + 1);
    myDate.push(date.getFullYear());
    const renewalDate = myDate.join('-');

    const setBillingCycle = (event) => {
        if (event.target.value === 'annual') {
            setBillingInfo({
                ...billingInfo,
                cycle: 'Annual',
                pay: 'Ghana cedis 100'
            });
        } else {
            setBillingInfo({...billingInfo, cycle: 'Monthly', pay: 'Ghana cedis 10'});
        }
    };

    const setPaymentOption = (event) => {
        if (event.target.value === 'visa'){
            setBillingInfo({...billingInfo, payType: 'Visa card'});
        }else if (event.target.value === 'momo'){
            setBillingInfo({...billingInfo, payType: 'MTN mobile money'});
        }else if (event.target.value === 'voda'){
            setBillingInfo({...billingInfo, payType: 'Vodafone cash'});
        }else if (event.target.value === 'airtel'){
            setBillingInfo({...billingInfo, payType: 'Airtel-Tigo money'});
        }
    };

    return (
        <>
            <Navbar/>
            <form action="">
                <div className='main-content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7'>
                                <h2>Checkout</h2>
                                <div className='divider'/>
                                <h4>Choose your billing cycle</h4>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                                            <label>
                                                <input type="radio" id="annual" name="cycle" value="annual"
                                                       onClick={setBillingCycle}/>
                                                Bill Yearly
                                            </label>
                                            <p className='make-teal'>GH cedis 100 / year</p>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                                            <label>
                                                <input type="radio" name="cycle" id="monthly" value="monthly"
                                                       onClick={setBillingCycle}/>
                                                Bill Monthly
                                            </label>
                                            <p className='make-teal'>GH cedis 10 / month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='divider'/>
                                <h4>Enter payment details</h4>
                                <div className='container-fluid payment'>
                                    <div className='row'>
                                        <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3 pay-style'>
                                            <label>
                                                <input type="radio" name="payment-option" id="visa" value="visa"
                                                       onClick={setPaymentOption}/>
                                                <i className="fa fa-cc-visa" aria-hidden="true"/>
                                            </label>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3 pay-style'>
                                            <label>
                                                <input type="radio" name="payment-option" id="momo" value="momo"
                                                       onClick={setPaymentOption}/>
                                                <img src={Momo} alt="mtn mobile money" className='mobile-money'/>
                                            </label>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3 pay-style'>
                                            <label>
                                                <input type="radio" name="payment-option" id="voda" value="voda"
                                                       onClick={setPaymentOption}/>
                                                <img src={Vodafone} alt="vodafone cash" className='mobile-money'/>
                                            </label>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3 pay-style'>
                                            <label>
                                                <input type="radio" name="payment-option" id="airtel" value="airtel"
                                                       onClick={setPaymentOption}/>
                                                <img src={Airtel} alt="airtel-tigo money" className='mobile-money'/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='visa-section'>
                                    <p>Name on card</p>
                                    <input type="text" name="cardName" id="cardName" className='card-input'/>
                                    <p>Card number</p>
                                    <input type="text" name="cardNumber" id="cardNumber" className='card-input'/>
                                    <div className='one-row'>
                                        <div className='half-field' style={{marginRight: '10%'}}>
                                            <p>Expiry date</p>
                                            <input type="date" name="expiryDate" id="expiryDate"
                                                   className='card-input'/>
                                        </div>
                                        <div className='half-field'>
                                            <p>CVC code</p>
                                            <input type="number" name="cvcCode" id="cvcCode" className='card-input'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                                <div className='card'>
                                    <div className='banner'/>
                                    <div className='checkout-content'>
                                        <h4>Payment Summary</h4>
                                        <div className='checkout-list'>
                                            <p>Billing Date</p>
                                            <p>{renewalDate}</p>
                                        </div>
                                        <div className='checkout-list'>
                                            <p>Billing Cycle</p>
                                            <p>{billingInfo.cycle}</p>
                                        </div>
                                        <div className='checkout-list'>
                                            <p>Payment Type</p>
                                            <p>{billingInfo.payType}</p>
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
export default Payment;