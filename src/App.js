import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import LoginBox from './components/login/LoginBox.js';



class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  
  componentDidMount () {
    var token = localStorage.getItem('token');
    $.getJSON("http://localhost:3000/csrfToken",(data, status) => {
      var csrf = data._csrf;
      $.post("http://localhost:3000/unet/device/get", {_csrf: csrf, token: token}, (res, status) => {
        if (!res.tokenValid) localStorage.removeItem('token');
        this.setState({
          loading: false
        });
      });
    });
  }


  render() {

    let splash_page;

    var token = localStorage.getItem('token');

    if (this.state.loading) {
      splash_page = <div className="app"> <p> Loading Please Wait... </p> </div>;
    } else {
      if (token) {
        splash_page = <div className="app"> logged in </div>;
      } else {
        splash_page = <div className="app"> <LoginBox /> </div>;
      }
    }
    

    return (
      <div>
        {splash_page}
      </div>
      );
  }
}


export default App;
