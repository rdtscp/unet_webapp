import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../_common/Header.js'
import ChatsList from './ChatsList/ChatsList.js';

import '../_common/common.css';

export default class ChatListPane extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="left-pane">
                <Header type='ChatList' />
                <ChatsList />
            </div>
        );
    }
}