import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        var colour = 'left';
        if (this.props.user == this.props.message.sender) {
            colour = 'right';
        }

        var message = this.props.message.message;
        if (this.props.chat.users.length > 2) {
            message = this.props.message.username + ': ' + this.props.message.message
        }
        console.log(message);

        return (
            <div className={"msg-" + colour} id={this.props.message.id}>
                <div className="bubble">
                    <article className="media">
                        <div className={"media-content " + colour} id={this.props.message.id}>
                            {message}
                        </div>
                        <div className="media-right">
                            <a className="time-stamp"><sub className="time-stamp"> <span> {this.props.message.timestamp}</span> </sub></a>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}