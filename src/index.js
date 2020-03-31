import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from "./redux/store";
import ScrollToTop from "./utils/scroll-to-top";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop/>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
