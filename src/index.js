import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
import AppRoutes from './private/appRoutes';
import {Provider} from 'react-redux';
import store from './private/store';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
    , 
    document.getElementById('root')
);