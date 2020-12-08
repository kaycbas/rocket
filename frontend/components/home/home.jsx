import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.signOut();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.handleClick}>Sign Out</button>
            </div>
        )
    }
}
