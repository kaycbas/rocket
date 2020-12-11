import React, { Component } from 'react'

export default class ArticleShow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.article.title}</h1>
            </div>
        )
    }
}
