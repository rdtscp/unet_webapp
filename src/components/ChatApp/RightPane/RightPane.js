import React, { Component } from 'react';
import './RightPane.css';

import ChatHeader from './ChatHeader/ChatHeader.js';
import ChatInput from './ChatInput/ChatInput.js';
import Message from './Message/Message.js';

import network from './networkHelper.js';
import axios from 'axios';

export default class RightPane extends Component {
    
    constructor(props) {
        super(props);
    }

    sendMessage = (msg) => {
        alert(msg)
        var token = localStorage.getItem('token');
        network.getCSRF((csrf) => {
            axios({
                method:'POST',
                url:'http://api.localhost:1337/unet/message/create',
                data: {
                  _csrf: csrf,
                  token: token,
                  id: this.props.chat.id,
                  message: msg
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                console.log(response.data)
            })
        });
    }

    render() {
        if (this.props.chat == null) {
            return (
                <div className="right-pane">
                    Select a chat from the left pane.
                </div>
            );

        } else {
            // Get last 10 messages.
            var messages = this.props.chat.messages.map((entry) =>
                // Create friend entry, pass data and add/remove from Chat method down.
                <Message side='left' chat={entry} />
            );
            return (
                <div className="right-pane">
                    <ChatHeader chat={this.props.chat} />
                    <div className="chat-body" id="chat-body">

                        {messages}

                    </div>
                    <ChatInput sendMsg={this.sendMessage} />
                </div>
            );
        }
    }
}