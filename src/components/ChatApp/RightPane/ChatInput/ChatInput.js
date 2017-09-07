import React, { Component } from 'react';
import './ChatInput.css';

export default class ChatInput extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-footer">
                <div id="input" className="chat-input" contentEditable="true" placeholder="$" data-text="true"></div>
            </div>
        );
    }
}