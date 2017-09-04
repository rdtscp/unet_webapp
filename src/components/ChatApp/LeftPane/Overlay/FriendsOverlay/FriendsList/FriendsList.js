import React, { Component } from 'react';
import './FriendsList.css';

import network from './networkHelper.js';
import axios from 'axios';

export default class FriendsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    componentDidMount () {
        
        var token = localStorage.getItem('token');
        // Get CSRF token.
        network.getCSRF((csrf) => {
            // Get Friends.
            axios({
                method:'POST',
                url:'http://api.localhost:1337/unet/friendship/get/all',
                data: {
                  _csrf: csrf,
                  token: token
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                if (response.data.msg) alert(response.data.msg);
                this.setState({
                    friends: response.data.friendships
                });
            })
        });
    
    }

    render() {

        const listItems = this.state.friends.map((friend) =>
            // Create friend entry, pass data down to props.
            <li>{friend.id}</li>
        );

        return (
            <div className="friendsListBody">
                {listItems}
            </div>
        );
    }
}