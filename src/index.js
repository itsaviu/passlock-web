import { render } from 'react-dom';
import React from 'react';
import App from './app';
import {Provider} from "react-redux";
import commonStyle from './styles/common.css';
import navbar from './styles/navbar.css';
import Store from "./store";
// import {initErrorHandling} from "./interceptor/api-interceptor";

// initErrorHandling();

render(
    <Provider store={Store}>
        <App/>
    </Provider>, document.getElementById('app')
);
