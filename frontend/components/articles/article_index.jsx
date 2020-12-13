import React, { Component } from 'react'
import ArticleIndexItem from './article_index_item'
import { Link } from 'react-router-dom'
import LoadingIcon from './loading_icon'

export default class ArticleIndex extends Component {
    constructor(props) {
        super(props);
        this.renderArticles = this.renderArticles.bind(this);
    }

    componentDidMount() {
        // debugger;
        this.props.fetchArticles();
    }

    renderArticles() {
        if (this.props.articles === []) return null;
        return this.props.articles.map(article => (
            <ArticleIndexItem 
                key={article.id} 
                article={article} 
                indexType={this.props.indexType} 
                createSave={this.props.createSave}
                deleteSave={this.props.deleteSave}
            />
        ));
    }

    render() {
        if (this.props.loading) {
            return <section className="loading-icon-container"><LoadingIcon /></section>;
        }
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
