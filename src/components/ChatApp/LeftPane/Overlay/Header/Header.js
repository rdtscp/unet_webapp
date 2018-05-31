import React, { Component } from 'react';

import CloseBut from './CloseBut/CloseBut.js';

import './Header.css';

export default class Header extends Component {
    
    render() {

        return (
            <div className="header">
                <CloseBut close={this.props.close} />
                <div className="headerTitle">
                    {this.props.title}
                </div>
            </div>
        );
    }
}