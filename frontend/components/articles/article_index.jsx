import React, { Component } from 'react'
import ArticleIndexItemContainer from './article_index_item_container'
import LoadingIcon from './loading_icon'

export default class ArticleIndex extends Component {
    constructor(props) {
        super(props);
        this.renderArticles = this.renderArticles.bind(this);
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticles() {
        let { articles, indexType } = this.props;
        if (articles === []) return null;
        return articles.map(article => (
            <ArticleIndexItemContainer 
                key={article.id} 
                article={article}
                indexType={indexType}
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
