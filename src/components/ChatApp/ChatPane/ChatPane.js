import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../_common/Header.js'
import ChatBody from './ChatBody/ChatBody.js';
import ChatInput from './ChatInput/ChatInput.js';

import '../_common/common.css';

export default class ChatPane extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="right-pane">
                <Header type='ChatBody' />
                <ChatBody />
                <ChatInput />
            </div>
        );
    }
}