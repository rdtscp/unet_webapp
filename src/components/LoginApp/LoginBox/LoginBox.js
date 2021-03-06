import React, { Component } from 'react';
import axios from 'axios';
import network from '../../_common/networkHelper.js';
import 'bootstrap/dist/css/bootstrap.css';
require('./LoginBox.css');

export default class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.state = { login: 'shown', register: 'hidden' };
    
        // This binding is necessary to make `this` work in the callback
        this.showLogin = this.showLogin.bind(this);
        this.showRegister = this.showRegister.bind(this);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);

    }

    showLogin(e) {
        e.preventDefault()
        this.setState({
            login: 'shown',
            register: 'hidden'
        });
        document.getElementById("login_nav").classList.add("active");
        document.getElementById("register_nav").classList.remove("active");
    }

    showRegister(e) {
        e.preventDefault()
        this.setState({
            login: 'hidden',
            register: 'shown'
        });
        document.getElementById("register_nav").classList.add("active");
        document.getElementById("login_nav").classList.remove("active");

    }

    register() {

        var uname = document.getElementById("reg_uname").value;
        var pword = document.getElementById("reg_pword").value;
        
        network.getCSRF((csrf) => {
            axios({
                method: 'POST',
                url: 'https://acwilson96-unet-core.herokuapp.com/unet/user/create',
                data: {
                    _csrf: csrf,
                    username: uname,
                    password: pword,
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                alert(response.data.msg)
                if (response.data.token) {
                    this.props.login(true)
                    localStorage.setItem('token', response.data.token);
                }
            });
        });
    }

    login() {

        var uname = document.getElementById("log_uname").value;
        var pword = document.getElementById("log_pword").value;
        
        network.getCSRF((csrf) => {
            axios({
                method: 'POST',
                url: 'https://acwilson96-unet-core.herokuapp.com/unet/device/create',
                data: {
                    _csrf: csrf,
                    username: uname,
                    password: pword,
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    this.props.auth();
                }
            });
        });
    }

    // Handles all key presses in the input fields.
    _handleKeyPress = (e) => {
        // If Enter key pressed without shift held.
        if (e.keyCode === 13) {
            if (this.state.login === 'shown') {
                this.login();
            }
            else {
                this.register();
            }
        }
    }

    render() {
        return (
            // Central Card
            <div className="card login-container">
                {/* Navbar Container */}
                <div>
                    <nav className="nav nav-pills nav-fill">
                        <a onClick={this.showLogin} id="login_nav" className="nav-item nav-link active" href="" >Login</a>
                        <a onClick={this.showRegister} id="register_nav" className="nav-item nav-link" href="" >Register</a>
                    </nav>
                </div>
                {/* Form Container */}
                <div>
                    <div className={this.state.login} id="login_div">
                        <div className="form-group">
                            <input onKeyDown={this._handleKeyPress} id="log_uname" type="username" className="form-control" aria-describedby="emailHelp" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input onKeyDown={this._handleKeyPress} id="log_pword" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button onClick={this.login} className="btn btn-primary justify-content-center">Login</button>
                    </div>
                    <div className={this.state.register} id="register_div">
                        <div className="form-group">
                            <input onKeyDown={this._handleKeyPress} id="reg_uname" type="username" className="form-control" aria-describedby="emailHelp" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input onKeyDown={this._handleKeyPress} id="reg_pword" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button onClick={this.register} className="btn btn-primary justify-content-center">Register</button>
                    </div>
                </div>
            </div>
        );
    }
}