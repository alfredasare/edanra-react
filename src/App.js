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
import ProvideSpace from "./pages/provide-space/provide-space.components";
import SearchAndResults from "./pages/search-and-results/search-and-results.components";
import SignUp from "./pages/signup/signup.components";
import TermsPage from "./pages/terms/terms.components";
import ViewSpace from "./pages/view-space/view-space.components";

function App() {
    return (
        <div className="App">
            <h1>Hello Efiewura</h1>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/contact' component={ContactPage}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/done' component={HostingComplete}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/provide-space' component={ProvideSpace}/>
                <Route path='/search' component={SearchAndResults}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/terms' component={TermsPage}/>
                <Route path='/view-space' component={ViewSpace}/>
                <Route component={ErrorPage}/>
            </Switch>
        </div>
);
}

export default App;
