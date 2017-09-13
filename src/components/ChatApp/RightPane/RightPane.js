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
        if (props.chat == null) {
            this.state = {
                messages: []
            }
        } else {
            this.state = {
                messages: props.chat.messages
            }
        }
    }

    componentWillReceiveProps() {
        if (this.props.chat == null) {
            this.setState({
                messages: []
            });
            console.log(this.state.messages)
        } else {
            this.setState({
                messages: this.props.chat.messages
            });
            console.log(this.state.messages)
        }
    }

    componentDidMount() {
        // Listen for updates.
        const { io } = this.props;
        io.socket.on('newMessage', (msg) => {
            var chat = this.props.chat;
            // If the message is for this chat.
            if (msg.chat == chat.id) {
                var msgs = this.state.messages;
                msgs.push(msg);
                this.setState({
                    messages: msgs
                });
            }
        });
    }

    sendMessage = (msg) => {
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
            var messages = this.state.messages.map((entry) =>
                // Create friend entry, pass data and add/remove from Chat method down.
                <Message user={this.props.user} chat={this.props.chat} message={entry} />
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