import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal } from 'react-icons/fi'

export default class ArticleIndexItem extends Component {
    render() {
        // debugger;
        const { id, title, author, url, cover_img } = this.props.article;
        if (!this.props.article) return null;
        return (
            <article className="article-grid-item">
                <Link to="/test">
                    <div className="article-item-img-container">
                        <img className="article-item-img" src={cover_img} alt="cover img" />
                    </div>
                </Link>
                <div className="article-item-info">
                    <Link to="/test">
                        <h2 className="title">{title}</h2>
                    </Link>
                    <div className="metas">
                        <div>{author ? author : url}</div>
                        <span>•</span>
                        <div>20 min</div>
                    </div>
                    <div className="description">
                        Most of us have a pretty terrible 
                        understanding of history. 
                        Our knowledge is spotty, with large
                    </div>
                    <div className="article-item-ctrls">
                        <FiMoreHorizontal size={20} />
                    </div>
                </div>
            </article>
        )
    }
}
