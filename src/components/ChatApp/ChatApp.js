import React, { Component } from 'react';
import LeftPane from './LeftPane/LeftPane.js';
import RightPane from './RightPane/RightPane.js';

import 'bulma/css/bulma.css';

export default class ChatApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openChat: null
        }
    }

    openChat = (chat) => {
        alert('open chat: ' + chat.id + ' ' + chat.name)
    }

    render() {
        return (
            <div className="app">
                <LeftPane openChat={this.openChat} />
                <RightPane openChat={this.state.openChat} />
            </div>
        );
    }
}