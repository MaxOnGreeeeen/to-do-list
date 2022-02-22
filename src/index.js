import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from "./store";
import Notes from "./pages/Notes";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root')
);

