import React from 'react';
import './navbar.styles.scss';
import {Link, NavLink} from "react-router-dom";


const Navbar = () => {

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
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
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
                        <li className="nav-item">
                            <NavLink activeClassName="nav-active" className="nav-link" to="/provide-space">
                                Provide space
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-active" className="nav-link" title="" to="/search">
                                Find Space
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0 ml-auto">
                                <input id="nav-form" className="form-control" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <div id="nav-button">
                                    <button className="btn btn-primary btn-md my-2 my-sm-0 ml-3"
                                            type="submit">Search
                                    </button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
