import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import network from '../common/networkHelper.js';
require('./ChatApp.css');

export default class ChatApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="left-pane"> friends list </div>
                <div className="right-pane"> current chat </div>
            </div>
        );
    }
}