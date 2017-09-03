import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../_common/common.css';


export default class ChatPane extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-body" id="chat-body">
            </div>
        );
    }
}