import React, { Component } from 'react';
import './Overlay.css';

import Header from './Header/Header.js';

export default class ComposeOverlay extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="overlay">
                <Header title="Compose New Message" close={this.props.toggleCompose} />
            </div>
        );
    }
}