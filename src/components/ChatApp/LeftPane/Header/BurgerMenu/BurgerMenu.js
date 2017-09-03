import React, { Component } from 'react';
import './BurgerMenu.css';

export default class BurgerMenu extends Component {
    
    constructor(props) {
        super(props);
    }

    openBurgerMenu() {
        alert('open burger menu');
    }

    render() {
        return (
            <div className="burgerBut" onClick={this.openBurgerMenu}>
                <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}