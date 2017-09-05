import React, { Component } from 'react';
import './ListBody.css';

import axios from 'axios';
import network from './networkHelper.js';

export default class ListBody extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            chats: []
        }
    }

    // Retrieve list of Chats, and set the state.
    componentDidMount () {
        var token = localStorage.getItem('token');
        // Get CSRF token.
        network.getCSRF((csrf) => {
            // Get Friends.
            axios({
                method:'POST',
                url:'http://api.localhost:1337/unet/user/get',
                data: {
                  _csrf: csrf,
                  token: token
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                if (response.data.chats) {
                    this.setState({
                        chats: response.data.chats
                    });
                }
            })
        });
    }

    render() {
        return (
            <div className="list-body">

            </div>
        );
    }
}