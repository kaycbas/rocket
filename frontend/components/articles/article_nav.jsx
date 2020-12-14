import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineHighlight } from 'react-icons/ai'
import { AiOutlineTag } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { FiTrash } from 'react-icons/fi'
import { BiFontFamily } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'


class ArticleNav extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.archiveArticle = this.archiveArticle.bind(this);
        this.unArchiveArticle = this.unArchiveArticle.bind(this);
        this.saveArticle = this.saveArticle.bind(this);
        this.unsaveArticle = this.unsaveArticle.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    archiveArticle() {
        this.props.archiveSave(this.props.save);
    }

    unArchiveArticle() {
        this.props.unArchiveSave(this.props.save);
    }

    saveArticle() {
        if (!this.props.article.save_id) {
            this.props.createSave(this.props.article.id);
        }
    }

    unsaveArticle() {
        if (!!this.props.article.save_id) {
            this.props.deleteSave(this.props.save.id);
        }
    }

    renderNavUtils() {
        if (this.props.article.filter === 'list') {
            return (
                <ul className="read-nav-utils">
                        {/* <div className="read-nav-btn">
                            <AiOutlineHighlight size={28} />
                        </div>
                        <div className="read-nav-btn">
                            <AiOutlineTag size={26} />
                        </div> */}
                        <Link to="/">
                            <div className="read-nav-btn">
                                <AiOutlineStar size={28} />
                            </div>
                        </Link>
                        <Link to="/">
                            <div onClick={this.archiveArticle} className="read-nav-btn">
                                <FiArchive size={23} />
                            </div>
                        </Link>
                        <Link to="/">
                            <div onClick={this.unsaveArticle} className="read-nav-btn">
                                <FiTrash size={25} />
                            </div>
                        </Link>
                    </ul>
            )
        } else if (this.props.article.filter === 'archived') {
            return (
                <ul className="read-nav-utils">
                    <Link to="/archive">
                        <div onClick={this.unArchiveArticle} className="read-nav-btn">
                            <div className="save-util-icon"></div>
                        </div>
                    </Link>
                    <Link to="/archive">
                        <div className="read-nav-btn">
                            <AiOutlineStar size={28} />
                        </div>
                    </Link>
                    <Link to="/archive">
                        <div onClick={this.unsaveArticle} className="read-nav-btn">
                            <FiTrash size={25} />
                        </div>
                    </Link>
                </ul>
            )
        } else if (this.props.article.filter === 'featured') {
            return (
                <ul className="read-nav-utils">
                    <Link to="/discover">
                        <div onClick={this.saveArticle} className="read-nav-btn">
                            <div className="save-util-icon"></div>
                        </div>
                    </Link>
                    <Link to="/discover">
                        <div className="read-nav-btn">
                            <BiHide size={28} />
                        </div>
                    </Link>
                </ul>
            )
        }
    }

    render() {
        // debugger;
        return (
            <header className="read-nav-container">
                <nav className="read-nav-content">
                    <div onClick={this.goBack} className="read-nav-btn">
                        <BiArrowBack size={26} />
                    </div>
                    {this.renderNavUtils()}
                    <div className="read-nav-btn">
                        <BiFontFamily size={26} />
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(ArticleNav);