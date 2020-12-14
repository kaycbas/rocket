import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineHighlight } from 'react-icons/ai'
import { AiOutlineTag } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { FiTrash } from 'react-icons/fi'
import { BiFontFamily } from 'react-icons/bi'


export default class ArticleNav extends Component {
    constructor(props) {
        super(props);
        this.archiveArticle = this.archiveArticle.bind(this);
        this.unsaveArticle = this.unsaveArticle.bind(this);
    }

    archiveArticle() {
        this.props.archiveSave(this.props.save);
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
                            <div onClick={this.unsaveArticle} className="read-nav-btn">
                                <FiTrash size={25} />
                            </div>
                        </Link>
                    </ul>
            )
        } else if (this.props.article.filter === 'featured') {
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
        }
    }

    render() {
        return (
            <header className="read-nav-container">
                <nav className="read-nav-content">
                    <Link to='/' className="read-nav-btn">
                        <BiArrowBack size={26} />
                    </Link>
                    {this.renderNavUtils()}
                    <div className="read-nav-btn">
                        <BiFontFamily size={26} />
                    </div>
                </nav>
            </header>
        )
    }
}
