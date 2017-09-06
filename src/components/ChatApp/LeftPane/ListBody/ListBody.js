import React, { Component } from 'react';
import './ListBody.css';

import ChatEntry from './ChatEntry/ChatEntry.js';

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
                if (response.data.user.chats) {
                    this.setState({
                        chats: response.data.user.chats
                    });
                }
            })
        });
    }

    render() {

        // Create a list of FriendEntrys.
        const chatList = this.state.chats.map((chat) =>
            // Create friend entry, pass data and remove method down.
            <ChatEntry data={chat} key={chat.id} />
        );

        return (
            <div className="list-body">
                {chatList}
            </div>
        );
    }
}