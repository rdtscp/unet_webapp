import React, { Component } from 'react';
import './ComposeMsg.css';

export default class ComposeMsg extends Component {
    
    constructor(props) {
        super(props);
    }

    composeNewMsg() {
        alert('compose new message');
    }

    render() {
        return (
            <div className="composeBut" onClick={this.composeNewMsg}>
                <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}