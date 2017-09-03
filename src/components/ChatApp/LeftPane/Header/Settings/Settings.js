import React, { Component } from 'react';
import './Settings.css';

export default class Settings extends Component {
    
    constructor(props) {
        super(props);
    }

    showSettings() {
        alert('showing settings')
    }

    render() {
        return (
            <div className="settingsBut" onClick={this.showSettings}>
                <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}