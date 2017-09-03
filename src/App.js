import React, { Component } from 'react';
import './App.css';
import LoginApp from './components/LoginApp/LoginApp.js';
import ChatApp from './components/ChatApp/ChatApp.js';
import network from './components/_common/networkHelper.js';


/* class to define landing page of Application.
 *
 * Checks if the auth token stored is valid,
 * and presents components appropriately.
 * 
 */
export default class App extends Component {

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
    if (this.state.loading) {
    return (<p> Loading Please Wait... </p>);
    } else {
      if (this.state.authenticated) {
        return (
          <ChatApp />
        );
      } else {
        return (
          <LoginApp login={this.isAuthenticated.bind(this)} />
        );
      }
    }
  }
}