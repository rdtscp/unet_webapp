import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

if (location.protocol !== process.env.REACT_APP_PROTOCOL) {
  location.href = process.env.REACT_APP_PROTOCOL + window.location.href.substring(window.location.protocol.length);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
