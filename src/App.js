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
    
    var token = localStorage.getItem('token');

    axios({
      method:'POST',
      url:'http://api.localhost:1337/unet/device/get',
      data: {
        token: token
      },
      withCredentials: true,
      contentType: 'json',
    })
    .then(function (response) {
      alert(response.data.tokenValid)
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
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
