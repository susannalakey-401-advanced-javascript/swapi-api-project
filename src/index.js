import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router/Router';
import * as serviceWorker from './serviceWorker';
import App from './components/App/App'

// ReactDOM.render(<Router />, document.getElementById('root'));

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();