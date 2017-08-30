import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
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

    showLogin() {
        this.setState({
            login: 'shown',
            register: 'hidden'
        });
        document.getElementById("login_nav").classList.add("active");
        document.getElementById("register_nav").classList.remove("active");
    }

    showRegister() {
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
        
        $.getJSON("http://localhost:3000/csrfToken",(data, status) => {
            var csrf = data._csrf;
            $.post("http://localhost:3000/unet/user/create", {
                username: uname,
                password: pword,
                _csrf: csrf
            },
            function(data, status){
                alert(data.msg);
            });
        });
    }

    login() {
        var uname = document.getElementById("log_uname").value;
        var pword = document.getElementById("log_pword").value;
        
        $.post("http://localhost:1337/unet/user/get", {
            username: uname,
            password: pword
        },
        function(data, status){
            alert(data.msg);
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
        });
    }

    render() {
        return (
            // Central Card
            <div className="card login-container">
                {/* Navbar Container */}
                <div>
                    <nav className="nav nav-pills nav-fill">
                        <a onClick={this.showLogin} id="login_nav" className="nav-item nav-link active" href="javascript:void(0);">Login</a>
                        <a onClick={this.showRegister} id="register_nav" className="nav-item nav-link" href="javascript:void(0);">Register</a>
                    </nav>
                </div>
                {/* Form Container */}
                <div>
                    <div className={this.state.login} id="login_div">
                        <div className="form-group">
                            <input id="log_uname" type="username" className="form-control" aria-describedby="emailHelp" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input id="log_pword" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button onClick={this.login} className="btn btn-primary justify-content-center">Login</button>
                    </div>
                    <div className={this.state.register} id="register_div">
                        <div className="form-group">
                            <input id="reg_uname" type="username" className="form-control" aria-describedby="emailHelp" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input id="reg_pword" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button onClick={this.register} className="btn btn-primary justify-content-center">Register</button>
                    </div>
                </div>
            </div>
        );
    }
}