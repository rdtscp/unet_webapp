import React, { Component } from 'react';

import './ChatEntry.css';

import axios from 'axios';
import network from './networkHelper.js';

export default class FriendEntry extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            chat: {}
        }
    }

    openChat = () => {
        this.props.openChat(this.props.data)
    }

    // Get the chat and connect to the chat socket.
    componentDidMount() {
        var token = localStorage.getItem('token')
        network.getCSRF((csrf) => {
            axios({
                method:'POST',
                url:'http://api.localhost:1337/unet/chat/get',
                data: {
                  _csrf: csrf,
                  token: token,
                  id: this.props.data.id
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                if (response.data.chat) {
                    this.setState({
                        chat: response.data.chat
                    });
                    console.log(this.state.chat)
                }
                
            })
        });
    }

    render() {

        var chatName = this.props.data.name;
        if (this.props.data.name.length > 19) {
            chatName = chatName.substring(0, 16);
            chatName += '...';
        }

        var colour = 'left';
        // alert(this.props.data.last_sender + '==' + this.props.user)
        if (this.props.data.last_sender == this.props.user) {
            //alert('you sent last msg')
            colour = 'right';
        }

        var message = this.props.data.last_msg;
        if (message.length > 64) {
            alert(message.length)
        }
        if (this.props.data.isGroup) {
            if (this.state.chat.last_sender) {
                message = this.state.chat.last_sender.username + ': ' + message;
            } else {
                message = 'Loading...';
            }
        }

        return (
            <div className="chatEntry" key={this.props.data.id} id={this.props.data.id} onMouseDown={this.openChat}>
                <div className="chatAvatar">
                    <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image" />
                </div>
                <div className="chatTimestamp">
                        {this.state.chat.last_active}
                    </div>
                <div className="friendContent">
                    <div className="contentTop">
                        {this.state.chat.name}
                    </div>
                    
                    <div className={"contentBot " + colour}>
                        {message}
                    </div>
                </div>
            </div>
        );
    }
}