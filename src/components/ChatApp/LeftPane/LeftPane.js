import React, { Component } from 'react';
import './LeftPane.css';

import Header from './Header/Header.js';
import ListBody from './ListBody/ListBody.js';

export default class LeftPane extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="left-pane">
                <Header />
                <ListBody />
            </div>
        );
    }
}