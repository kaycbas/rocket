import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ArticleIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.indexType} Index</h1>
            </div>
        )
    }
}
