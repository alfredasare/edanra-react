import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";
import ContactPage from "./pages/contact/contact.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import ErrorPage from "./pages/error/error-page.component";
import HostingComplete from "./pages/hosting-complete/hosting-complete.component";
import LoginPage from "./pages/login/login.component";
import ProvideSpace from "./pages/provide-space/provide-space.component";
import SearchPage from "./pages/search/search.component";
import SignUp from "./pages/signup/signup.component";
import TermsPage from "./pages/terms/terms.component";
import ViewSpace from "./pages/view-space/view-space.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import SearchResultsPage from "./pages/search-results/search-results.component";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/contact' component={ContactPage}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/done' component={HostingComplete}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/provide-space' component={ProvideSpace}/>
                <Route path='/search' component={SearchPage}/>
                <Route path='/search-results' component={SearchResultsPage}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/terms' component={TermsPage}/>
                <Route path='/view-space' component={ViewSpace}/>
                <Route component={ErrorPage}/>
            </Switch>
            <Footer/>
        </div>
);
}

export default App;