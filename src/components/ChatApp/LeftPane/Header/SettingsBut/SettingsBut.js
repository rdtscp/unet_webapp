import React, { Component } from 'react';
import './SettingsBut.css';

export default class SettingsBut extends Component {
    
    constructor(props) {
        super(props);
    }

    showSettings() {
        alert('showing settings');
    }

    render() {
        return (
            <div className="settingsBut" onClick={this.props.toggleSettings}>
                <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}