import React, { Component } from 'react';
import './ComposeBut.css';

export default class ComposeBut extends Component {

    render() {
        return (
            <div className="composeBut" onClick={this.props.toggleCompose}>
                <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}