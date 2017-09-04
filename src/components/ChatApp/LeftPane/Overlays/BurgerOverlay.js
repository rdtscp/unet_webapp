import React, { Component } from 'react';
import './Overlay.css';

import Header from './Header/Header.js';
import CloseBut from './Header/CloseBut/CloseBut.js';

export default class BurgerOverlay extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="overlay">
                <Header title="More Apps Coming Soon!" close={this.props.toggleBurger} />
            </div>
        );
    }
}
