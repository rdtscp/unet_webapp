import React, { Component } from 'react';

import Header from '../Header/Header.js';

export default class ComposeOverlay extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header title="New Chat" close={this.props.close} />
        );
    }
}