import React from 'react';
import ReactDOM from 'react-dom/client';//react 18
import App from './App';
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import './_base.scss';

ReactDOM.createRoot(document.getElementById('root')).render(//react 18
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);