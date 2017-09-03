import React, { Component } from 'react';
import './FriendsList.css';

export default class FriendsList extends Component {
    
    constructor(props) {
        super(props);
    }

    showFriends() {
        alert('show friends list');
    }

    render() {
        return (
            <div className="friendsBut" onClick={this.showFriends}>
                <i className="fa fa-users fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}