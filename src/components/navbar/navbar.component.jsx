import React from 'react';
import {connect} from 'react-redux';
import './navbar.styles.scss';
import {Link, NavLink} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser, selectLoadingUser} from "../../redux/user/user.selectors";
import {signOutStart} from "../../redux/user/user.actions";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";


const Navbar = ({currentUser, signOutStart, loader}) => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg"
             color-on-scroll="100"
             id="sectionsNav">
            <div className="container">
                <div className="navbar-translate">
                    <Link className="navbar-brand" to="/">
                        <img src={require("../../assets/img/efiewura.png")} alt="" className="img-fluid logo"/>
                        <span style={{color: '#004D40', fontSize: '0.9em', fontWeight: 'bold'}}> EFIEWURA</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"/>
                        <span className="navbar-toggler-icon"/>
                        <span className="navbar-toggler-icon"/>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="nav-active" className="nav-link" exact={true} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-active" className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-active" className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        {
                            currentUser ?
                                <li className="nav-item">
                                    <NavLink activeClassName="nav-active" className="nav-link" to="/provide-space">
                                        Provide space
                                    </NavLink>
                                </li> :
                                <></>
                        }
                        <li className="nav-item">
                            <NavLink activeClassName="nav-active" className="nav-link" to="/search">
                                Find Space
                            </NavLink>
                        </li>
                        {
                            currentUser ?
                                <li className="nav-item">
                                    <NavLink activeClassName="nav-active" className="nav-link" to="/dashboard">
                                        Dashboard
                                    </NavLink>
                                </li> :
                                <></>
                        }
                        <li className="nav-item">
                            {
                                currentUser ?
                                    <Link className="nav-link" onClick={signOutStart} to="/login">
                                        {loader ? <LoadingSpinner/> : <>Sign Out</>}
                                    </Link>
                                    : <NavLink activeClassName="nav-active" className="nav-link" to="/login">
                                        Sign In
                                    </NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    loader: selectLoadingUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
