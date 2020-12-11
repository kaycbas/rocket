import React, { Component } from 'react';
import parse from 'html-react-parser';

export default class ArticleShow extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.article_id);
    }

    render() {
        if (!this.props.article.content) return null;
        return (
            <div className="read-container">
                <header className="read-header">
                    <h1>{this.props.article.title}</h1>
                </header>
                {parse(this.props.article.content)}
            </div>
        )
    }
}
