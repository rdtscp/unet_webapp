import React, { Component } from 'react';
import './FriendEntry.css';

import network from './networkHelper.js';
import axios from 'axios';

export default class FriendEntry extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            added: false,
        }
    }

    addToChat = () => {
        this.setState({
            added: true
        });
        this.props.addChatMember(this.props.data.friend.id)
    }

    removeFromChat = () => {
        this.setState({
            added: false
        });
        this.props.rmChatMember(this.props.data.friend.id)
    }
    
    render() {
        // Generate the Accept/Delete/Remove buttons.
        var addremove = null;
        if (this.state.added) {
            addremove =  <div className="friendButs">
                             <a className="button is-small is-danger" onClick={this.removeFromChat}>Remove</a>
                         </div>;
        } else {
            addremove =  <div className="friendButs">
                             <a className="button is-small is-success" onClick={this.addToChat}>Add</a>
                         </div>;
        }
        return (
            <div className="friendEntry" key={this.props.data.id} id={this.props.data.id}>
                <div className="friendAvatar">
                    <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image" />
                </div>
                <div>
                    <div>
                        &nbsp; {this.props.data.friend.username}
                    </div>
                    {addremove}
                </div>
            </div>
        );
    }
}