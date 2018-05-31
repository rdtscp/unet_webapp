import React, { Component } from 'react';

import './ChatHeader.css';

export default class ChatHeader extends Component {
    
    render() {
        return (
            <div className="chatHeader">
                <div className="chatAvatar">
                    <img src="http://bulma.io/images/placeholders/64x64.png" alt="" />
                </div>
                <div className="chatName is-size-3">
                        {this.props.chat.name}
                </div>
            </div>
        );
    }
}