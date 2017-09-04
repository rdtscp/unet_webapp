import React, { Component } from 'react';
import './LeftPane.css';

import Header from './Header/Header.js';
import ListBody from './ListBody/ListBody.js';

import BurgerOverlay from './Overlays/BurgerOverlay.js';
import ComposeOverlay from './Overlays/ComposeOverlay.js';
import FriendsOverlay from './Overlays/FriendsOverlay.js';
import SettingsOverlay from './Overlays/SettingsOverlay.js';

export default class LeftPane extends Component {
    
    constructor(props) {
        super(props);
        // What overlays are enabled.
        this.state = {
            burger: false,
            compose: false,
            friends: false,
            settings: false
        }
    }

    toggleBurger() {
        this.setState({burger: !this.state.burger});
    }

    toggleCompose() {
        this.setState({compose: !this.state.compose});
    }

    toggleFriends() {
        this.setState({friends: !this.state.friends});
    }

    toggleSettings() {
        this.setState({settings: !this.state.settings});
    }

    render() {
        var overlay;
        if (this.state.burger) {
            overlay = <BurgerOverlay toggleBurger={this.toggleBurger.bind(this)} />;
        }
        else if (this.state.compose) {
            overlay = <ComposeOverlay toggleCompose={this.toggleCompose.bind(this)} />;
        }
        else if (this.state.friends) {
            overlay = <FriendsOverlay toggleFriends={this.toggleFriends.bind(this)} />;
        }
        else if (this.state.settings) {
            overlay = <SettingsOverlay toggleSettings={this.toggleSettings.bind(this)} />;
        } else {
            overlay = <Header toggleBurger={this.toggleBurger.bind(this)} toggleCompose={this.toggleCompose.bind(this)} toggleFriends={this.toggleFriends.bind(this)} toggleSettings={this.toggleSettings.bind(this)} />;
        }
        return (
            <div className="left-pane">
                {/* Pass methods down to show the different Header button's menus. */}
                {overlay}
                <ListBody />
            </div>
        );
    }
}