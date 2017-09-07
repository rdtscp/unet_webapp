import React, { Component } from 'react';
import './RightPane.css';

import axios from 'axios';
import network from './networkHelper.js';

import Header from './Header/Header.js';

export default class RightPane extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.chat == null) {
            return (
                <div className="right-pane">
                    Select a chat from the left pane.
                </div>
            );

        } else {
            return (
                <div className="right-pane">
                    {this.props.chat}
                </div>
            );
        }
    }
}