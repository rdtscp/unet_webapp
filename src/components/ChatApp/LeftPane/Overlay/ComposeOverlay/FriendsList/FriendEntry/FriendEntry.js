import React, { Component } from 'react';
import './FriendEntry.css';

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
                             <a className="button is-small is-danger" onClick={this.removeFromChat}>Remove</a> &nbsp; <a className="button is-small is-success" onClick={this.props.createChat(this.props.data.friend.username)}>Compose</a>
                         </div>;
        } else {
            addremove =  <div className="friendButs">
                             <a className="button is-small is-info" onClick={this.addToChat}>Add</a> &nbsp; <a className="button is-small is-success" onClick={this.props.createChat(this.props.data.friend.username)}>Compose</a>
                         </div>;
        }
        return (
            <div className="friendEntry" key={this.props.data.id} id={this.props.data.id}>
                <div className="friendAvatar">
                    <img src="http://bulma.io/images/placeholders/64x64.png" alt="avatar" />
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