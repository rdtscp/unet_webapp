import React, { Component } from 'react';

import './ChatEntry.css';

export default class FriendEntry extends Component {
    
    constructor(props) {
        super(props);
    }

    openChat = () => {
        this.props.openChat(this.props.data)
    }

    render() {

        var chatName = this.props.data.name;
        if (this.props.data.name.length > 19) {
            chatName = chatName.substring(0, 16);
            chatName += '...';
        }

        return (
            <div className="chatEntry" key={this.props.data.id} id={this.props.data.id} onMouseDown={this.openChat}>
                <div className="chatAvatar">
                    <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image" />
                </div>
                <div className="chatTimestamp">
                        {this.props.data.last_active}
                    </div>
                <div className="friendContent">
                    <div className="contentTop">
                        {chatName}
                    </div>
                    
                    <div className="contentBot">
                        {this.props.data.last_msg}
                    </div>
                </div>
            </div>
        );
    }
}