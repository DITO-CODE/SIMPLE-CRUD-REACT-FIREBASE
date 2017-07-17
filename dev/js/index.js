import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import * as firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import { install } from 'redux-loop';
import App from './components/app';


var initDataBase = {
    apiKey: "AIzaSyChw4ZYW8Xn9MT8qwH0y1l8kAwWVDFBp4w",
    authDomain: "contacts-1922c.firebaseapp.com",
    databaseURL: "https://contacts-1922c.firebaseio.com",
    projectId: "contacts-1922c",
    storageBucket: "contacts-1922c.appspot.com",
    messagingSenderId: "541757310409"
  };

firebase.initializeApp(initDataBase);


const store = createStore(allReducers,{},install());

ReactDOM.render(
<Provider store={store}>
	<App />
</Provider>,
    document.getElementById('root')
);