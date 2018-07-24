import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
// import App from './App';
import Coursera from './coursera'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Coursera />, document.getElementById('root'));
registerServiceWorker();
