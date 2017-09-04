import React, { Component } from 'react';

import './FriendEntry.css';

export default class FriendEntry extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {

        var acceptDelete;
        if (this.props.json.confirmed) {
            acceptDelete =  <div className="friendButs">
                                <a className="button is-small is-danger">Delete</a>
                            </div>;
        } else {
            acceptDelete =  <div className="friendButs">
                                <a className="button is-small is-success">Accept</a> &nbsp; <a className="button is-small is-danger">Delete</a>
                            </div>;
        }

        return (
            <div className="friendsEntry">
                <div className="friendTitle">
                    <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image" />
                </div>
                <div>
                &nbsp; {this.props.json.friend}
                </div>
                <div className="friendButs">
                    <a className="button is-small is-success">Accept</a> &nbsp; <a className="button is-small is-danger">Delete</a>
                </div>
            </div>
        );
    }
}