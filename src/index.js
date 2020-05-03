import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from "./redux/store";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// serviceWorker.register({
//     onUpdate: registration => {
//         alert('New version available!  Ready to update?');
//         if (registration && registration.waiting) {
//             registration.waiting.postMessage({ type: 'SKIP_WAITING' });
//         }
//         window.location.reload();
//     }
// });

serviceWorker.unregister();