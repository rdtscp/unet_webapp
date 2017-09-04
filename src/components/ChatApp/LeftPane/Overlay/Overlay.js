import React, { Component } from 'react';
import './Overlay.css';

import BurgerOverlay from './BurgerOverlay/BurgerOverlay.js';
import ComposeOverlay from './ComposeOverlay/ComposeOverlay.js';
import FriendsOverlay from './FriendsOverlay/FriendsOverlay.js';
import SettingsOverlay from './SettingsOverlay/SettingsOverlay.js';

export default class Overlay extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        var overlay;
        // Find out which overlay we are to present.
        switch(this.props.type) {
            case 'burger':
                overlay = <BurgerOverlay close={this.props.close} />
                break;
            case 'compose':
                overlay = <ComposeOverlay close={this.props.close} />
                break;
            case 'friends':
                overlay = <FriendsOverlay close={this.props.close} />
                break;
            case 'settings':
                overlay = <SettingsOverlay close={this.props.close} />
                break;
        }

        return (
            <div className="overlay">
                {overlay}
            </div>
        );
    }
}
