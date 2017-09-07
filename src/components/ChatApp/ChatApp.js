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
            currChat: null
        }
    }

    componentDidMount() {
        var currChatID  = localStorage.getItem('currChatID');
        var token       = localStorage.getItem('token');
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
                <LeftPane openChat={this.openChat} />
                <RightPane chat={this.state.currChat} />
            </div>
        );
    }
}