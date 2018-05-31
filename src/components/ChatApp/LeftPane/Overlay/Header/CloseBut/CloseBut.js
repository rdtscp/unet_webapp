import React, { Component } from 'react';
import './CloseBut.css';

export default class BurgerBut extends Component {

    render() {
        return (
            <div className="burgerBut" onClick={this.props.close}>
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}