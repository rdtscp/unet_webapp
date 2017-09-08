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
                            message.message
                        </div>
                        <div className="media-right">
                            <a className="time-stamp"><sub className="time-stamp" onclick="alert(\' modal showing message info \');"> <span> 12/34/5678 </span> </sub></a>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}