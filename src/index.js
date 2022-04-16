import React from 'react';
import ReactDOM from 'react-dom/client';//react 18
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
//router
import { BrowserRouter } from "react-router-dom";
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import './_base.scss';

ReactDOM.createRoot(document.getElementById('root')).render(//react 18
    // <React.StrictMode>
    <Provider store={store}>
        {/* reason for using BrowserRouter here is to be able to access route history in App.js component to redirect unauthenticated users*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>
);