import React, { Component } from 'react';

import CloseBut from './CloseBut/CloseBut.js';

import './Header.css';

export default class Header extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        var create = null;
        if (this.props.type == "compose") {
            create =  <div className="createChatBut" onClick={this.props.createChat}>
                          <a className="button is-info" >Create</a>
                      </div>
        }


        return (
            <div className="header">
                <CloseBut close={this.props.close} />
                <div className="headerTitle">
                    {this.props.title}
                </div>
                {create}
            </div>
        );
    }
}