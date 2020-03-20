import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";
import ContactPage from "./pages/contact/contact.component";
import ErrorPage from "./pages/error/error-page.component";
import HostingComplete from "./pages/hosting-complete/hosting-complete.component";
import LoginPage from "./pages/login/login.component";
import ProvideSpace from "./pages/provide-space/provide-space.component";
import SearchPage from "./pages/search/search.component";
import SignUp from "./pages/signup/signup.component";
import TermsPage from "./pages/terms/terms.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import SearchResultsPage from "./pages/search-results/search-results.component";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {checkUserSession} from "./redux/user/user.actions";
import ViewSpaceContainer from "./pages/view-space/view-space.container";
import {fetchPropertiesStart} from "./redux/properties/properties.actions";
import DashboardContainer from "./pages/dashboard/dashboard.container";

const App = ({checkUserSession, currentUser, fetchPropertiesStart}) => {

    useEffect(() => {
        checkUserSession();
        fetchPropertiesStart();
    }, [checkUserSession, fetchPropertiesStart]);

    return (
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/contact' component={ContactPage}/>
                <Route path='/dashboard' component={DashboardContainer}/>
                <Route path='/done' component={HostingComplete}/>
                <Route path='/login' render={() => currentUser ? (<Redirect to='/' />) : (<LoginPage/>)}/>
                <Route path='/provide-space' component={ProvideSpace}/>
                <Route path='/search' component={SearchPage}/>
                <Route path='/search-results' component={SearchResultsPage}/>
                <Route exact path='/signup' render={() => currentUser ? (<Redirect to='/' />) : (<SignUp/>)}/>
                <Route path='/terms' component={TermsPage}/>
                <Route path='/properties/:uid' component={ViewSpaceContainer}/>
                <Route component={ErrorPage}/>
            </Switch>
            <Footer/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
    fetchPropertiesStart: () => dispatch(fetchPropertiesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
