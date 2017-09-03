import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './common.css';
var FontAwesome = require('react-fontawesome');

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            friends: 'nav-link',
            chats: 'nav-link active'
        }
        this.selectChats = this.selectChats.bind(this);
        this.selectFriends = this.selectFriends.bind(this);
    }

    // Need to pass these two states further up such that body is reloaded.
    selectFriends() {
        this.setState({
            friends: 'nav-link active',
            chats: 'nav-link'
        });
    }
    selectChats() {
        this.setState({
            friends: 'nav-link',
            chats: 'nav-link active'
        });
    }

    render() {

        switch (this.props.type) {
            case ('ChatList'):
                return (
                    <div className="header">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className={this.state.friends} onClick={this.selectFriends} href="javascript:void(0);">Friends</a>
                            </li>
                            <li className="nav-item">
                                <a className={this.state.chats} onClick={this.selectChats} href="javascript:void(0);">Chats</a>
                            </li>
                        </ul>
                    </div>
                );
            case ('ChatBody'):
                return (
                    <div className="header">
                        
                    </div>
                );
        }
    }
}