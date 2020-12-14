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
    }

    archiveArticle() {

    }

    render() {
        return (
            <header className="read-nav-container">
                <nav className="read-nav-content">
                    <Link to='/' className="read-nav-btn">
                        <BiArrowBack size={26} />
                    </Link>
                    <ul className="read-nav-utils">
                        <div className="read-nav-btn">
                            <AiOutlineHighlight size={28} />
                        </div>
                        <div className="read-nav-btn">
                            <AiOutlineTag size={26} />
                        </div>
                        <Link to="/">
                            <div className="read-nav-btn">
                                <AiOutlineStar size={28} />
                            </div>
                        </Link>
                        <div className="read-nav-btn">
                            <FiArchive size={23} />
                        </div>
                        <div className="read-nav-btn">
                            <FiTrash size={25} />
                        </div>
                    </ul>
                    <div className="read-nav-btn">
                        <BiFontFamily size={26} />
                    </div>
                </nav>
            </header>
        )
    }
}
