import React, { Component } from 'react';
import './Overlay.css';

import Header from './Header/Header.js';

export default class SettingsOverlay extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="overlay">
                <Header title="Settings" close={this.props.toggleSettings} />
            </div>
        );
    }
}