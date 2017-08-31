import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import axios from 'axios';
import LoginBox from './components/login/LoginBox.js';



class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: true,
      loading: true
    };
  }
  
  componentDidMount () {

    function getCRSF(cb) {
      axios({
        method:'GET',
        url:'http://api.localhost:1337/csrfToken',
        withCredentials: true,
        contentType: 'json',
      })
      .then((response) => {
        cb(response.data._csrf);
      });
    }
    
    var token = localStorage.getItem('token');

    getCRSF((csrf) => {
      axios({
        method:'POST',
        url:'http://api.localhost:1337/unet/device/get',
        data: {
          _csrf: csrf,
          token: token
        },
        withCredentials: true,
        contentType: 'json',
      })
      .then((response) => {
        this.setState({
          authenticated: response.data.tokenValid,
          loading: false
        })
      });
    });

    
  }


  


  render() {

    let splash_page;

    if (this.state.loading) {
      splash_page = <div className="app"> <p> Loading Please Wait... </p> </div>;
    } else {
      if (this.state.authenticated) {
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
