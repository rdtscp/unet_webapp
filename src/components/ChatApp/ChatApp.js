import React, { Component } from 'react';
import LeftPane from './LeftPane/LeftPane.js';
import RightPane from './RightPane/RightPane.js';

import 'bulma/css/bulma.css';

export default class ChatApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <LeftPane />
                <RightPane />
            </div>
        );
    }
}