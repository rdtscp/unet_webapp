import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import axios from 'axios';
import LoginBox from './components/login/LoginBox.js';
import network from './helpers/networkHelper.js';


/* class to define landing page of Application.
 *
 * Checks if the auth token stored is valid,
 * and presents components appropriately.
 * 
 */
class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: true,
      loading: true
    };
  }

  isAuthenticated() {
    this.setState({
      authenticated: true
    });
  }
  
  componentDidMount () {
    
    var token = localStorage.getItem('token');

    // Get CSRF token.
    network.getCSRF((csrf) => {
      // Get Device Token's authenticity.
      network.tokenValid(token, csrf, (tokenValid) => {
        // Set state appropriately.
        this.setState({
          authenticated: tokenValid,
          loading: false
        });
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
        splash_page = <div className="app"> <LoginBox login={this.isAuthenticated.bind(this)} /> </div>;
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
