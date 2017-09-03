import React, { Component } from 'react';

import BurgerMenu from './BurgerMenu/BurgerMenu.js';
import ComposeMsg from './ComposeMsg/ComposeMsg.js';
import FriendsList from './FriendsList/FriendsList.js';
import Settings from './Settings/Settings.js';

import './Header.css';

export default class Header extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <BurgerMenu />
                <ComposeMsg />
                <FriendsList />
                <Settings />
            </div>
        );
    }
}