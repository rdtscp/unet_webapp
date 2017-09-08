import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"msg-" + this.props.side} id="replace">
                <div className="bubble">
                    <article className="media">
                        <div className={"media-content " + this.props.side} id="replace">
                            {this.props.chat.message}
                        </div>
                        <div className="media-right">
                            <a className="time-stamp"><sub className="time-stamp"> <span> {this.props.chat.timestamp}</span> </sub></a>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}