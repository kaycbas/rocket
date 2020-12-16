import React, { Component } from 'react';
import ArticleNavContainer from './article_nav_container';
import parse from 'html-react-parser';

export default class ArticleShow extends Component {
    constructor(props) {
        super(props);
        this.renderHeaderImg = this.renderHeaderImg.bind(this);
    }

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.article_id);
    }

    renderHeaderImg() {
        if (!this.props.article.custom_img_url) return null;
        return (<img className="article-show-img" src={this.props.article.custom_img_url} alt="show img" />)
    }

    render() {
        if (!this.props.article || !this.props.article.content) return null;
        const { 
            id, title, author, url, full_url, reading_time, content 
        } = this.props.article;
        return (
            <div>
                <ArticleNavContainer article={this.props.article} save={this.props.save} />
                <div className="read-container">
                    <header className="read-header">
                        <h1>{title}</h1>
                        <div className="meta">
                            By
                            <div style={{fontWeight: "bolder"}}>{author ? author : null}</div>
                            <span>{author ? '∙' : null}</span>
                            <div>{url}</div>
                            <span>∙</span>
                            <div>{reading_time}</div>
                        </div>
                        <a 
                            href={full_url}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >View Original</a>
                        {this.renderHeaderImg()}
                    </header>
                    <main className="read-body">
                        {parse(content)}
                    </main>
                </div>
            </div>
        )
    }
}
