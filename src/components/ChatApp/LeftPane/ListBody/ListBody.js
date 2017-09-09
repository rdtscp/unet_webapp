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

    render() {

        // Create a list of FriendEntrys.
        const chatList = this.props.chats.map((chat) =>
            // Create friend entry, pass data and remove method down.
            <ChatEntry data={chat} key={chat.id} openChat={this.props.openChat} />
        );

        return (
            <div className="list-body">
                {chatList}
            </div>
        );
    }
}