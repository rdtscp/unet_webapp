import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import ChatListPane from './ChatListPane/ChatListPane.js';
import ChatPane from './ChatPane/ChatPane.js';

import '../_common/common.css';

export default class ChatApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <ChatListPane />
                <ChatPane />
            </div>
        );
    }
}