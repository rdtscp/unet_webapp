import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="headerUser">
                    <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
                </div>

                <div className="headerOpts">
                    <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                </div>

                <div className="headerOpts">
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                </div>

                <div className="headerOpts">
                    <a className="fa fa-cog fa-2x" aria-hidden="true"></a>
                </div>
            </div>
        );
    }
}