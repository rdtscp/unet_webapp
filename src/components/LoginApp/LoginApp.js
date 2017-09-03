import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../_common/common.css';

import LoginBox from './LoginBox/LoginBox.js';


export default class LoginApp extends Component {

    constructor(props) {
        super(props);
    }

    isAuthenticated() {
        this.props.login();
    }

    render() {
        return (
            <div className="app">
                <LoginBox login={this.isAuthenticated.bind(this)} />
            </div>
        );
    }
}