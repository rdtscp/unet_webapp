import React, { Component } from 'react';
import './ChatInput.css';

export default class ChatInput extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('keydown', this._handleKeyPress);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this._handleKeyPress);
    }

    _handleKeyPress = (e) => {
        var input = document.getElementById('input');
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            var msg = input.innerHTML;
            alert(msg)
        }
        else if (e.keyCode == 38 && input.innerHTML == '') {
            alert('Get latest message.');
            //document.getElementById('input').innerHTML = (document.getElementById(latest_msg +  '_content').innerHTML);
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