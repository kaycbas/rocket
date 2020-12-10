import React, { Component } from 'react';
import ArticleIndexItem from './article_index_item';
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
            <ArticleIndexItem key={article.id} article={article} />
        ));
    }

    render() {
        return (
            <section className="article-index">
                <div className="article-index-header">
                    <h1>
                        {this.props.indexType}
                    </h1>
                </div>
                <ul className="article-grid">
                    {this.renderArticles()}
                </ul>
            </section>
        )
    }
}
