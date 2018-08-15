// Startup point for the [CLIENT] Application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducers from './reducers';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

const store = createStore(
    reducers, 
    window.INITIAL_STATE, 
    applyMiddleware(thunk)
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider> 
    , document.querySelector('#root')
);
