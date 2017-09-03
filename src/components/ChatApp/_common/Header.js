import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './common.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        switch (this.props.type) {
            case ('ChatList'):
                return (
                    <div className="header">
                        Chat list header.
                    </div>
                );
            case ('ChatBody'):
                return (
                    <div className="header">
                        Chat body header.
                    </div>
                );
        }
    }
}