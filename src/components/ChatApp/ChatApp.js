import React, { Component } from 'react';
import LeftPane from './LeftPane/LeftPane.js';
import RightPane from './RightPane/RightPane.js';

import axios from 'axios';
import network from './networkHelper.js';

import 'bulma/css/bulma.css';

var socketIOClient = require('socket.io-client');
var sailsIOClient = require('sails.io.js');
var io = sailsIOClient(socketIOClient);
io.sails.url = 'http://api.localhost:1337';

export default class ChatApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
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
                if (response.data.user) {
                    // Set state.
                    this.setState({
                        user: response.data.user.id
                    });
                }
                if (response.data.user.chats) {
                    // Set state.
                    this.setState({
                        chats: response.data.user.chats
                    });
                    // Subscribe to all the chats.
                    this.state.chats.forEach((chat) => {
                        this.joinChat(chat.id);
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

    // Subscribes the socket to a chat.
    joinChat = (chatID) => {
        var token = localStorage.getItem('token');
        io.socket.get('/csrfToken', (res) => {
            var csrf = res._csrf;
            io.socket.headers = {
                "x-csrf-token": csrf,
            };
            io.socket.post('/unet/chat/subscribe', [token, chatID]);
        });
    }

    render() {
        return (
            <div className="app">
                <LeftPane io={io} openChat={this.openChat} chats={this.state.chats} user={this.state.user} />
                <RightPane io={io} chat={this.state.currChat} user={this.state.user} />
            </div>
        );
    }
}