import React, { Component } from 'react';
import LeftPane from './LeftPane/LeftPane.js';
import RightPane from './RightPane/RightPane.js';

import 'bulma/css/bulma.css';

export default class ChatApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currChatID: null
        }
    }

    openChat = (chat) => {
        alert('open chat: ' + chat.id)

        localStorage.setItem('currChatID', chat.id)

        this.setState({
            currChatID: chat.id
        });
    }

    render() {
        return (
            <div className="app">
                <LeftPane openChat={this.openChat} />
                <RightPane currChatID={this.state.currChatID} />
            </div>
        );
    }
}