import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineTag } from 'react-icons/ai'
import { FiDelete } from 'react-icons/fi'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { FiTrash } from 'react-icons/fi'
import { BiHide } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

export default class ArticleIndexItem extends Component {
    constructor(props) {
        super(props);
        this.state = { edit: false }

        this.toggleSave = this.toggleSave.bind(this);
        this.unsaveArticle = this.unsaveArticle.bind(this);
        this.archiveArticle = this.archiveArticle.bind(this);
        this.unArchiveArticle = this.unArchiveArticle.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.renderCtrls = this.renderCtrls.bind(this);
        this.hideArticle = this.hideArticle.bind(this);
        this.renderArticleImg = this.renderArticleImg.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleSaveTag = this.handleSaveTag.bind(this);
        this.renderEditTagsModal = this.renderEditTagsModal.bind(this);
        this.renderTagBadge = this.renderTagBadge.bind(this);
        this.renderTagCtrl = this.renderTagCtrl.bind(this);
        this.handleUntag = this.handleUntag.bind(this);
        this.renderArchiveCtrl = this.renderArchiveCtrl.bind(this);
    }

    toggleSave() {
        if (!!this.props.article.save_id) {
            this.props.deleteSave(this.props.save.id);
        } else {
            this.props.createSave(this.props.article.id);
        }
    }

    toggleEdit() {
        this.setState({ edit: !this.state.edit })
    }

    handleSaveTag() {
        const input = document.getElementById('tag-input');
        const label = input.value;
        let newTag = {
            user_id: this.props.user_id,
            article_id: this.props.article.id,
            label: label
        }
        this.props.createTag(newTag);
        this.toggleEdit();
    }

    handleUntag() {
        if (this.props.tag) {
            this.props.deleteTag(this.props.tag.id)
        }
    }

    renderEditTagsModal() {
        if (!this.state.edit) return null;
        return (
            <React.Fragment>
                <div className="tag-edit-overlay"></div>
                <div className="tag-edit-modal">
                    <div className="tag-input-top">
                        <h2>Edit tag</h2>
                        <div onClick={this.toggleEdit} className="close-icon">
                            <AiOutlineClose size={18} />
                        </div>
                    </div>
                    <div className="tag-input-bottom">
                        <input
                            id="tag-input"
                            type="text"
                            required
                        />
                        <button onClick={this.handleSaveTag}>Save</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    unsaveArticle() {
        if (!!this.props.article.save_id) {
            this.props.deleteSave(this.props.save.id);
        }
        if (!!this.props.article.favorite_id) {
            this.props.deleteFavorite(this.props.article.favorite_id)
        }
        if (!!this.props.article.tag_id) {
            this.props.deleteTag(this.props.article.tag_id)
        }
    }

    archiveArticle() {
        if (!this.props.save.archived) {
            this.props.archiveSave(this.props.save);
        }
    }

    unArchiveArticle() {
        if (this.props.save.archived) {
            this.props.unArchiveSave(this.props.save);
        }
    }

    toggleFavorite() {
        if (!!this.props.article.favorite_id) {
            this.props.deleteFavorite(this.props.article.favorite_id)
                .then(() => this.forceUpdate());
        } else {
            this.props.createFavorite(this.props.article.id)
                .then(() => this.forceUpdate());
        }
    }

    hideArticle() {
        this.props.createHide(this.props.article.id);
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
            if (!this.props.article.favorite_id) return null;
            return (
                <div className="favorite-badge-container">
                    <div className="favorite-badge"></div>
                </div>
            )
        }
    }

    renderTagBadge() {
        if (!this.props.tag) return null;
        return (
            <div className="tag-badge">
                {this.props.tag.label}
            </div>
        )
    }

    renderTagCtrl() {
        if (!this.props.tag) {
            return (
                <div onClick={this.toggleEdit} className="ctrl-line">
                    <AiOutlineTag size={18} />
                    <p>Tag</p>
                </div>
            )
        } else {
            return (
                <div onClick={this.handleUntag} className="ctrl-line">
                    <FiDelete size={18} />
                    <p>Untag</p>
                </div>
            )
        }
    }

    renderCtrls() {
        const isFavorited = !!this.props.article.favorite_id;
        if (this.props.article.filter === 'list') {
            return (
                <div className="article-item-ctrls">
                    <div className="ctrls-btn">
                        <FiMoreHorizontal size={20} />
                        <div className="article-ctrls-modal fav-ctrl-line">
                            <div onClick={this.toggleFavorite} className="ctrl-line">
                                { isFavorited ? <AiFillStar size={20} color="#fcb643" /> : <AiOutlineStar size={20} /> }
                                <p className="fav-icon-label">Favorite</p>
                            </div>
                            <div onClick={this.archiveArticle} className="ctrl-line">
                                <FiArchive size={18} />
                                <p>Archive</p>
                            </div>
                            {this.renderTagCtrl()}
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
                        <FiMoreHorizontal size={20} />
                        <div className="article-ctrls-modal">
                            <div onClick={this.toggleFavorite} className="ctrl-line">
                                { isFavorited ? <AiFillStar size={20} color="#fcb643" /> : <AiOutlineStar size={20} /> }
                                <p className="fav-icon-label">Favorite</p>
                            </div>
                            <div onClick={this.unArchiveArticle} className="ctrl-line">
                                <div className="save-ctrl-icon"></div>
                                <p>Re-add</p>
                            </div>
                            {this.renderTagCtrl()}
                            <div onClick={this.unsaveArticle} className="ctrl-line">
                                <FiTrash size={18} />
                                <p>Delete</p>
                            </div>
                            <span className="hover-soln"></span>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.article.filter === 'featured') {
            return (
                <div className="article-item-ctrls">
                    <div className="ctrls-btn">
                        <FiMoreHorizontal size={20} />
                        <div className="article-ctrls-modal">
                            <div onClick={this.hideArticle} className="ctrl-line">
                                <BiHide size={18} />
                                <p>Hide</p>
                            </div>
                            <span className="hover-soln"></span>
                        </div>
                    </div>
                </div>
            )
        // } else if (this.props.article.filter === 'favorites') {
        } else {
            return (
                <div className="article-item-ctrls">
                    <div className="ctrls-btn">
                        <FiMoreHorizontal size={20} />
                        <div className="article-ctrls-modal">
                            <div onClick={this.toggleFavorite} className="ctrl-line">
                                { isFavorited ? <AiFillStar size={20} color="#fcb643" /> : <AiOutlineStar size={20} /> }
                                <p className="fav-icon-label">Favorite</p>
                            </div>
                            {this.renderArchiveCtrl()}
                            {this.renderTagCtrl()}
                            <div onClick={this.unsaveArticle} className="ctrl-line">
                                <FiTrash size={18} />
                                <p>Delete</p>
                            </div>
                            <span className="hover-soln"></span>
                        </div>
                    </div>
                </div>
            )
        }
    }

    renderArchiveCtrl() {
        if (this.props.save && this.props.save.archived) {
            return (
                <div onClick={this.unArchiveArticle} className="ctrl-line">
                    <div className="save-ctrl-icon"></div>
                    <p>Re-add</p>
                </div>
            )
        } else {
            return (
                <div onClick={this.archiveArticle} className="ctrl-line">
                    <FiArchive size={18} />
                    <p>Archive</p>
                </div>
            )
        }
    }

    renderArticleImg() {
        if (this.props.article.custom_img_url) {
            return (<img className="article-item-img" src={this.props.article.custom_img_url} alt="cover img" />)
        } else {
            return (<img className="article-item-img" src={this.props.article.cover_img} alt="cover img" />)
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
                        {this.renderArticleImg()}
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
                </div>
                <div className="badges-container">
                    {this.renderSave()}
                    {this.renderTagBadge()}
                </div>
                {this.renderCtrls()}
                {this.renderEditTagsModal()}
            </article>
        )
    }
}
