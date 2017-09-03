import React, { Component } from 'react';
import Header from './Header/Header.js';
import './LeftPane.css';

export default class LeftPane extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="left-pane">
                <Header />
                {/* <ListBody /> */}
            </div>
        );
    }
}