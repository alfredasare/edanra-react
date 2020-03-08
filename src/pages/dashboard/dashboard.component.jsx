import React from "react";
import './dashboard.styles.scss';

const Dashboard = () => {

    return (
        <div id="dashboard" className="container">
            <h2>Manage all your ads from your dashboard</h2>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <div className="card">
                        <div style={{textAlign: 'center'}} className="card-body">
                            <div className="dash-text">
                                <p style={{fontSize: '20px'}}>Uploaded Ads</p>
                                <p style={{fontSize: '18px'}}>6</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="card">
                        <div style={{textAlign: 'center'}} className="card-body">
                            <div className="dash-text">
                                <p style={{fontSize: '20px'}}>Ads Pending</p>
                                <p style={{fontSize: '18px'}}>4</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="card">
                        <div style={{textAlign: 'center'}} className="card-body">
                            <div className="dash-text">
                                <p style={{fontSize: '20px'}}>Amount spent</p>
                                <p style={{fontSize: '18px'}}>Ghs 30.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Uploaded Ads</h2>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src={require('../../assets/img/1.jpg')} alt="" />
                            <div className="card-body">
                                <div className="options">
                                    <p><a className="options-link" href="#">Edit</a></p>
                                    <p><a className="options-link" href="#">Delete</a></p>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Type : <span
                                    style={{fontWeight: 'bold'}}>Guest House</span></li>
                                <li className="list-group-item">Uploaded : <span style={{fontWeight: 'bold'}}>7th May, 2018</span>
                                </li>
                                <li className="list-group-item">Status : <span style={{fontWeight: 'bold'}}>Pending</span>
                                </li>
                                <li style={{fontWeight: 'bold'}} className="list-group-item">Time left</li>
                                <li style={{listStyleType: 'none'}}>
                                    <div className="countdown list-group-item">
                                        <p className="countdown-nums" data-countdown="07/29/2018 01:12:32">
                                            <span className="number-hours">00</span>&nbsp;<span
                                            style={{fontSize: '15px'}}>hours</span>
                                            <span className="number-minutes">00</span>&nbsp;<span
                                            style={{fontSize: '15px'}}>minutes</span>
                                            <span className="number-seconds">00</span>&nbsp;<span
                                            style={{fontSize: '15px'}}>seconds<br /></span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src={require('../../assets/img/6.jpg')} alt="" />
                        <div className="card-body">
                            <div className="options">
                                <p><a className="options-link" href="#">Edit</a></p>
                                <p><a className="options-link" href="#">Delete</a></p>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Type : <span
                                style={{fontWeight: 'bold'}}>Guest House</span></li>
                            <li className="list-group-item">Uploaded : <span style={{fontWeight: 'bold'}}>7th May, 2018</span>
                            </li>
                            <li className="list-group-item">Status : <span style={{fontWeight: 'bold'}}>Pending</span>
                            </li>
                            <li style={{fontWeight: 'bold'}} className="list-group-item">Time left</li>
                            <li style={{listStyleType: 'none'}}>
                                <div className="countdown list-group-item">
                                    <p className="countdown-nums" data-countdown="07/29/2018 01:12:32">
                                        <span className="number-hours">00</span>&nbsp;<span
                                        style={{fontSize: '15px'}}>hours</span>
                                        <span className="number-minutes">00</span>&nbsp;<span
                                        style={{fontSize: '15px'}}>minutes</span>
                                        <span className="number-seconds">00</span>&nbsp;<span
                                        style={{fontSize: '15px'}}>seconds<br /></span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src={require('../../assets/img/4.jpg')} alt="" />
                        <div className="card-body">
                            <div className="options">
                                <p><a className="options-link" href="#">Edit</a></p>
                                <p><a className="options-link" href="#">Delete</a></p>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Type : <span
                                style={{fontWeight: 'bold'}}>Guest House</span></li>
                            <li className="list-group-item">Uploaded : <span style={{fontWeight: 'bold'}}>7th May, 2018</span>
                            </li>
                            <li className="list-group-item">Status : <span style={{fontWeight: 'bold'}}>Pending</span>
                            </li>
                            <li style={{fontWeight: 'bold'}} className="list-group-item">Time left</li>
                            <li style={{listStyleType: 'none'}}>
                                <div className="countdown list-group-item">
                                    <p className="countdown-nums" data-countdown="07/29/2018 01:12:32">
                                        <span className="number-hours">00</span>&nbsp;<span
                                        style={{fontSize: '15px'}}>hours</span>
                                        <span className="number-minutes">00</span>&nbsp;<span
                                        style={{fontSize: '15px'}}>minutes</span>
                                        <span className="number-seconds">00</span>&nbsp;<span
                                        style={{fontSize: '15px'}}>seconds<br /></span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src={require('../../assets/img/2.jpg')} alt="" />
                        <div className="card-body">
                            <div className="options">
                                <p><a className="options-link" href="#">Edit</a></p>
                                <p><a className="options-link" href="#">Delete</a></p>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Type : <span
                                style={{fontWeight: 'bold'}}>Guest House</span></li>
                            <li className="list-group-item">Uploaded : <span style={{fontWeight: 'bold'}}>7th May, 2018</span>
                            </li>
                            <li className="list-group-item">Status : <span style={{fontWeight: 'bold'}}>Pending</span>
                            </li>
                            <li style={{fontWeight: 'bold'}} className="list-group-item">Time left</li>
                            <li style={{listStyleType: 'none'}}>
                                <div className="countdown list-group-item">
                                    <p className="countdown-nums" data-countdown="07/29/2018 01:12:32">
                                        <span className="number-hours">00</span>&nbsp;<span
                                        style={{fontSize: '15px'}}>hours</span>
                                        <span className="number-minutes">00</span>&nbsp;<span
                                        style={{fontSize: '15px'}}>minutes</span>
                                        <span className="number-seconds">00</span>&nbsp;<span
                                        style={{fontSize: '15px'}}>seconds<br /></span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
);
};

export default Dashboard;
