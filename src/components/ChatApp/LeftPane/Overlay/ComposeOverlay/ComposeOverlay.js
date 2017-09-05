import React, { Component } from 'react';

import Header from '../Header/Header.js';
import FriendsList from './FriendsList/FriendsList.js';

import network from './networkHelper.js';
import axios from 'axios';

export default class ComposeOverlay extends Component {
    
    constructor(props) {
        super(props);
        // Have no members in chat.
        this.state = {
            chatMembers: []
        }
        console.log(this.state.chatMembers)
    }

    // Add a member to the state.
    addChatMember = (member) => {
        this.state.chatMembers.push(member.friend);
    }

    // Remove a member from the state.
    rmChatMember = (member) => {
        var chatMembers     = this.state.chatMembers.splice(0,0);
        var index           = chatMembers.indexOf(member.friend);
        this.state.chatMembers.splice(index, 1);
    }

    // Post to backend to create the chat.
    createChat = () => {
        console.log(this.state.chatMembers)
        var token = localStorage.getItem('token');
        network.getCSRF((csrf) => {
            axios({
                method:'POST',
                url:'http://api.localhost:1337/unet/chat/create',
                data: {
                  _csrf: csrf,
                  token: token,
                  members: this.state.chatMembers
                },
                withCredentials: true,
                contentType: 'json',
            })
            .then((response) => {
                console.log(response);
            })
        });
    }

    render() {
        return (
            <div id="FriendsOverlay">
                <Header type="compose" title="New Chat" close={this.props.close} createChat={this.createChat} />
                <FriendsList addChatMember={this.addChatMember} rmChatMember={this.rmChatMember} />
            </div>
        );
    }
}