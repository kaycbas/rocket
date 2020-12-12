import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineTag } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { FiTrash } from 'react-icons/fi'

export default class ArticleIndexItem extends Component {
    constructor(props) {
        super(props);
        this.saveArticle = this.saveArticle.bind(this);
    }

    saveArticle() {
        this.props.createSave(this.props.article.id);
    }

    renderSave() {
        if (!this.props.indexType === 'Discover') return null;
        return (
            <div onClick={this.saveArticle} className="pocket-save">
                <div className="pocket-save-img"></div>
                <p>Save</p>
            </div>
        )
    }

    render() {
        if (!this.props.article) return null;
        const { 
            id, title, author, url, reading_time, cover_img 
        } = this.props.article;
        return (
            <article className="article-grid-item">
                <Link to={`/read/${id}`}>
                    <div className="article-item-img-container">
                        <img className="article-item-img" src={cover_img} alt="cover img" />
                    </div>
                </Link>
                <div className="article-item-info">
                    <Link to={`/read/${id}`}>
                        <h2 className="title">{title}</h2>
                    </Link>
                    <div className="metas">
                        <div>{author ? author : url}</div>
                        <span>•</span>
                        <div>{reading_time}</div>
                    </div>
                    <div className="description">
                        Most of us have a pretty terrible 
                        understanding of history. 
                        Our knowledge is spotty, with large
                    </div>
                    {this.renderSave()}
                    <div className="article-item-ctrls">
                        <div className="ctrls-btn">
                            <FiMoreHorizontal size={18} />
                            <div className="article-ctrls-modal">
                                <div className="ctrl-line">
                                    <FiTrash size={18} />
                                    <p>Delete</p>
                                </div>
                                <div className="ctrl-line">
                                    <FiArchive size={18} />
                                    <p>Archive</p>
                                </div>
                                <div className="ctrl-line">
                                    <AiOutlineStar size={18} />
                                    <p>Favorite</p>
                                </div>
                                <div className="ctrl-line">
                                    <AiOutlineTag size={18} />
                                    <p>Tag</p>
                                </div>
                                <span className="hover-soln"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}
