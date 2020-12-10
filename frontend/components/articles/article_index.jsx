import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export default class ArticleIndex extends Component {
    constructor(props) {
        super(props);
        this.renderArticles = this.renderArticles.bind(this);
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticles() {
        if (!Array.isArray(this.props.articles)) return null;
        return this.props.articles.map(article => (
            <React.Fragment>
                <h1>{article.title}</h1>
                <h2>{article.author}</h2>
                <h2>{article.url}</h2>
                <h2>{article.reading_time}</h2>
                {parse(article.content)}
                {/* <div>{article.content}</div> */}
                {/* <pre>{article.content}</pre> */}
                {/* {articleText} */}
                {/* <p>{article.content}</p> */}
            </React.Fragment>
        ));
    }

    render() {
        return (
            <div>
                <h1>{this.props.indexType} Index</h1>
                {this.renderArticles()}
            </div>
        )
    }
}
