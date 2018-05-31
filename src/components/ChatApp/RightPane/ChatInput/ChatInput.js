import React, { Component } from 'react';
import './ChatInput.css';

export default class ChatInput extends Component {

    // Add/Remove listeners for this component.
    componentDidMount() {
        document.addEventListener('keydown', this._handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this._handleKeyPress);
    }

    // Pass the message up to the RightPane component to process sending the message.
    sendMessage = (msg) => {
        this.props.sendMsg(msg);
    }

    // Handles all key presses in the input field.
    _handleKeyPress = (e) => {
        var input = document.getElementById('input');
        // If Enter key pressed without shift held.
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            var msg = input.innerHTML;
            if (msg === './help' || msg === './h' || msg === './?') {
                alert('Available Commands\n    ./secret - Make your message blurred unless hovered over with mouse.');
                return;
            }
            if (input.innerHTML !== '') {
                this.sendMessage(msg);
                document.getElementById('input').innerHTML = '';
            }
        }
        else if (e.keyCode === 38 && input.innerHTML === '') {
            input.innerHTML = this.props.lastMessage.message;
        }
    }

    render() {
        return (
            <div className="chat-footer">
                <div id="input" className="chat-input" contentEditable="true" placeholder="$" data-text="true"></div>
            </div>
        );
    }
}