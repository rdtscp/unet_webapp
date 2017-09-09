import React, { Component } from 'react';
import LeftPane from './LeftPane/LeftPane.js';
import RightPane from './RightPane/RightPane.js';

import axios from 'axios';
import network from './networkHelper.js';

import 'bulma/css/bulma.css';

export default class ChatApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currChat: null,
            chats: []
        }
    }

    componentDidMount() {
        var token       = localStorage.getItem('token');
        // Get User & its Chats.
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
        var currChatID  = localStorage.getItem('currChatID');
        // Get the current Chat if it exists.
        if (currChatID) {
            network.getCSRF((csrf) => {
                axios({
                    method:'POST',
                    url:'http://api.localhost:1337/unet/chat/get',
                    data: {
                        id: currChatID,
                      _csrf: csrf,
                      token: token
                    },
                    withCredentials: true,
                    contentType: 'json',
                })
                .then((response) => {
                    if (response.data.chat) {
                        this.setState({
                            currChat: response.data.chat
                        });
                    }
                });
            });
        }
    }

    // Get a Chats info and set the state to load it into the right-pane.
    openChat = (chat) => {
        var token = localStorage.getItem('token');
        network.getCSRF((csrf) => {
            axios({
                method:'POST',
                url:'http://api.localhost:1337/unet/chat/get',
                data: {
                    id: chat.id,
                  _csrf: csrf,
                  token: token
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                if (response.data.chat) {
                    localStorage.setItem('currChatID', response.data.chat.id)
                    this.setState({
                        currChat: response.data.chat
                    });
                }
            });
        });
    }

    render() {
        return (
            <div className="app">
                <LeftPane openChat={this.openChat} chats={this.state.chats} />
                <RightPane chat={this.state.currChat} />
            </div>
        );
    }
}