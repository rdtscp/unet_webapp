import React, { Component } from 'react';
import './Overlay.css';

import Header from './Header/Header.js';

export default class FriendsOverlay extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="overlay">
                <Header title="Friends List" close={this.props.toggleFriends} />
            </div>
        );
    }
}