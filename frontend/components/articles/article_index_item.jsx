import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineTag } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { FiTrash } from 'react-icons/fi'
import { BiHide } from 'react-icons/bi'

export default class ArticleIndexItem extends Component {
    constructor(props) {
        super(props);
        this.toggleSave = this.toggleSave.bind(this);
        this.unsaveArticle = this.unsaveArticle.bind(this);
        this.archiveArticle = this.archiveArticle.bind(this);
        this.unArchiveArticle = this.unArchiveArticle.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.renderCtrls = this.renderCtrls.bind(this);
    }

    toggleSave() {
        if (!!this.props.article.save_id) {
            this.props.deleteSave(this.props.save.id);
        } else {
            this.props.createSave(this.props.article.id);
        }
    }

    unsaveArticle() {
        if (!!this.props.article.save_id) {
            this.props.deleteSave(this.props.save.id);
        }
    }

    archiveArticle() {
        this.props.archiveSave(this.props.save);
    }

    unArchiveArticle() {
        this.props.unArchiveSave(this.props.save);
    }

    toggleFavorite() {
        if (!!this.props.article.favorite_id) {
            this.props.deleteFavorite(this.props.article.favorite_id);
        } else {
            this.props.createFavorite(this.props.article.id);
        }
    }

    renderSave() {
        if (this.props.indexType === 'Discover') {
            const isSaved = !!this.props.article.save_id;
            const saveClass = isSaved ? "article-saved" : "article-unsaved";
            const saveIcon = isSaved ? (
                    <path 
                        d="M1.643 2h20.714C23.264 2 24 2.715 24 3.597v7.736C24 17.777 18.628 23 12 23S0 17.777 0 11.333V3.597C0 2.715.736 2 1.643 2zm14.306 6.43L12 12.304 8.05 8.429a1.5 1.5 0 0 0-2.1 2.142l5 4.906a1.5 1.5 0 0 0 2.1 0l5-4.906a1.5 1.5 0 0 0-2.1-2.142z">
                    </path> 
                ) : ( 
                    <path 
                        d="M2.506 4A.514.514 0 0 0 2 4.521v6.368C2 16.476 6.48 21 12 21s10-4.524 10-10.111V4.52A.514.514 0 0 0 21.494 4H2.506zm0-2h18.988A2.514 2.514 0 0 1 24 4.521v6.368C24 17.576 18.63 23 12 23S0 17.576 0 10.889V4.52C0 3.131 1.12 2 2.506 2zM16.3 8.786a1 1 0 0 1 1.4 1.428l-5 4.906a1 1 0 0 1-1.4 0l-5-4.906a1 1 0 1 1 1.4-1.428l4.3 4.22 4.3-4.22z">
                    </path> 
                );
            return (
                <div 
                    onClick={this.toggleSave} 
                    className={`pocket-save ${saveClass}`}>
                    <svg viewBox="0 0 24 24" id="svg-pocket">
                        {saveIcon}
                    </svg>
                    <p>Save</p>
                </div>
            )
        } else {
            return (
                // <svg viewBox="0 0 12 12" id="favorite-badge">
                //     <path d="M6.44.44l1.774 3.284 3.184.307a.5.5 0 0 1 .327.829L9.321 7.579l.634 3.782a.5.5 0 0 1-.732.522L6 10.125l-3.223 1.758a.5.5 0 0 1-.732-.522l.634-3.782-2.404-2.72A.5.5 0 0 1 .6 4.032l3.184-.307L5.56.44a.5.5 0 0 1 .88 0z" fill-rule="nonzero"></path>
                // </svg>
                <div className="favorite-badge-container">
                    <div className="favorite-badge"></div>
                </div>
            )
        }
    }

    renderCtrls() {
        if (this.props.article.filter === 'list') {
            return (
                <div className="article-item-ctrls">
                    <div className="ctrls-btn">
                        <FiMoreHorizontal size={18} />
                        <div className="article-ctrls-modal">
                            <div onClick={this.toggleFavorite} className="ctrl-line">
                                <AiOutlineStar size={18} />
                                <p>Favorite</p>
                            </div>
                            <div onClick={this.archiveArticle} className="ctrl-line">
                                <FiArchive size={18} />
                                <p>Archive</p>
                            </div>
                            {/* <div className="ctrl-line">
                                <AiOutlineTag size={18} />
                                <p>Tag</p>
                            </div> */}
                            <div onClick={this.unsaveArticle} className="ctrl-line">
                                <FiTrash size={18} />
                                <p>Delete</p>
                            </div>
                            <span className="hover-soln"></span>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.article.filter === 'archived') {
            return (
                <div className="article-item-ctrls">
                    <div className="ctrls-btn">
                        <FiMoreHorizontal size={18} />
                        <div className="article-ctrls-modal">
                            <div onClick={this.unArchiveArticle} className="ctrl-line">
                                <div className="save-ctrl-icon"></div>
                                <p>Re-add</p>
                            </div>
                            <div onClick={this.toggleFavorite} className="ctrl-line">
                                <AiOutlineStar size={18} />
                                <p>Favorite</p>
                            </div>
                            <div onClick={this.unsaveArticle} className="ctrl-line">
                                <FiTrash size={18} />
                                <p>Delete</p>
                            </div>
                            <span className="hover-soln"></span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="article-item-ctrls">
                    <div className="ctrls-btn">
                        <FiMoreHorizontal size={18} />
                        <div className="article-ctrls-modal">
                            <div className="ctrl-line">
                                <BiHide size={18} />
                                <p>Hide</p>
                            </div>
                            <span className="hover-soln"></span>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        if (!this.props.article) return null;
        const { 
            id, title, author, url, reading_time, cover_img , description
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
                        {description}
                    </div>
                    {this.renderSave()}
                    {this.renderCtrls()}
                </div>
            </article>
        )
    }
}
