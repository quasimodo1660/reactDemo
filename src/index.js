import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import './index.css';
import './App.css'
// import App from './App';
import Coursera from './coursera'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Coursera />, document.getElementById('root'));
registerServiceWorker();
