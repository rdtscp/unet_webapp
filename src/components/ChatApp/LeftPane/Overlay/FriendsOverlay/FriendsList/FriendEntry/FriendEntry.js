import React, { Component } from 'react';
import './FriendEntry.css';

import network from './networkHelper.js';
import axios from 'axios';

export default class FriendEntry extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            confirmed: this.props.json.confirmed
        }
    }

    componentDidMount () {
        
        var token = localStorage.getItem('token');
        // Get CSRF token.
        network.getCSRF((csrf) => {
            // Get Friends.
            axios({
                method:'POST',
                url:'http://api.localhost:1337/unet/profile/get',
                data: {
                  _csrf: csrf,
                  token: token,
                  id: this.props.json.friend
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                if (response.data.msg) alert(response.data.msg);
                this.setState({
                    username: response.data.profile.username
                });
            })
        });
    
    }

    acceptRequest = () => {
        alert('foo')
        this.setState({
            confirmed: true
        });
    }

    render() {

        var acceptDelete;
        if (this.state.confirmed) {
            acceptDelete =  <div className="friendButs">
                                <a className="button is-small is-danger">Remove</a>
                            </div>;
        } else {
            acceptDelete =  <div className="friendButs">
                                <a className="button is-small is-success" onClick={this.acceptRequest}>Accept</a> &nbsp; <a className="button is-small is-danger">Delete</a>
                            </div>;
        }

        return (
            <div className="friendEntry">
                <div className="friendAvatar">
                    <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image" />
                </div>
                <div>
                    <div>
                        &nbsp; {this.state.username}
                    </div>
                    {acceptDelete}
                </div>
            </div>
        );
    }
}