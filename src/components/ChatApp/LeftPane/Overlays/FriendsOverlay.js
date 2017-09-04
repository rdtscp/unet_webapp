import React, { Component } from 'react';
import './Overlay.css';

import axios from 'axios';
import network from './networkHelper.js';

import Header from './Header/Header.js';

export default class FriendsOverlay extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    // Fetches all Friendships.
    componentDidMount () {
        
        var token = localStorage.getItem('token');
    
        // Get CSRF token.
        network.getCSRF((csrf) => {
            axios({
                method: 'POST',
                url: 'http://api.localhost:1337/unet/friendships/get/all',
                data: {
                    _csrf: csrf,
                    token: token
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                alert(response.data.msg)
                if (response.data.friendships) {
                    // this.setState({
                    //    friends: response.data.friendships
                    // });
                }
            });
        });
    
      }

    render() {
        this.state.friends.push({sender: 'Add Friend'});
        var friends = this.state.friends.map((friend) => {
            return  (
                <li> {friend.sender} </li>
            );
        });
        return (
            <div className="overlay">
                <Header title="Friends List" close={this.props.toggleFriends} />
                <ul>
                    {friends}
                </ul>
            </div>
        );
    }
}