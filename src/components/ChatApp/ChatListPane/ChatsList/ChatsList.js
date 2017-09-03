import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import network from './networkHelper.js';
import axios from 'axios';

import '../_common/common.css';

export default class ChatsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            chats: []
        };
    }

    componentDidMount () {
        
        var token = localStorage.getItem('token');
    
        // Get CSRF token.
        network.getCSRF((csrf) => {
          // Get Device Token's authenticity.
          network.tokenValid(token, csrf, (tokenValid) => {
            if (tokenValid) {
                // Get Chat list.
                axios({
                    method:'POST',
                    url:'http://api.localhost:1337/unet/chat/get/all',
                    data: {
                      _csrf: csrf,
                      token: token
                    },
                    withCredentials: true,
                    contentType: 'json',
                })
                .then((response) => {
                    console.log(response.data.chats)
                    this.setState({
                       chats: response.data.chats 
                    });
                })
            } else {
                // Change state
            }
          });
        });
    
    }

    render() {
        return (
            <div className="list-body">
                <ul className="list-unstyled">
                {this.state.chats.map((chatEntry) => {
                    {/* Will return a <ChatListEntry /> at some point instead. */}
                    return(
                        <li className="media entry chat-entry" key={chatEntry.id}>
                            <img className="d-flex mr-3" src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
                            <div className="media-body">
                            <strong className="username">{chatEntry.friend.username}</strong>&nbsp;<small className="text-muted timestamp">{chatEntry.last_active}</small>
                            <p> <i className="last_msg">{chatEntry.last_msg}</i> </p>
                            </div>
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    }
}