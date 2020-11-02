import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import store from './redux/store'

import fetchEventsAction from './redux/fetchEvents';

import App from "./App";

    fetchEventsAction()


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
