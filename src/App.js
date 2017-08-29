import React, { Component } from 'react';
import './App.css';
import LoginBox from './components/login/LoginBox.js';



class App extends Component {
  render() {
    var token = localStorage.getItem(token);
    if (token) {
      return (
        <div className="app">
          <p> webapp </p>
        </div>
      )
    } else {
      return (
        <div className="app">
          <LoginBox />
        </div>
      );
    }
  }
}


export default App;
