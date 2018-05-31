import React, { Component } from 'react';
import './BurgerBut.css';

export default class BurgerBut extends Component {
    
    render() {
        return (
            <div className="burgerBut" onClick={this.props.toggleBurger}>
                <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}