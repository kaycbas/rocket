import React, { Component } from 'react';

function WelcomeModal({ openModal, closeModal }) {

    return (
        <div className="welcome-background">
            <div className="welcome-modal">
                {/* <div className="welcome-border-top"></div> */}
                <span onClick={() => closeModal()} className="close-modal-btn">&#x2715;</span>
                <h1>Welcome to Rocket!</h1>
                <h2>What is it?</h2>
                <p>Simply, Rocket lets you save articles for later reading.</p>
                <p>But it's also a powerful tool to organize and track your consumption of content from around the internet.</p>
                <h2>Some tips:</h2>
                <p>• Featured articles can be found and saved from the <span className='highlight-1'>Discover</span> tab</p>
                <p>• Articles can also be saved by clicking the <span className='highlight-2'>+</span> icon in the navbar and pasting in an article URL (try an article from Medium!)</p>
                <p>• Saved articles show up in the <span className='highlight-3'>My List</span> tab. From here you can favorite, tag, archive, or delete your saved articles.</p>
                {/* <div className="welcome-border-bottom"></div> */}
            </div>
        </div>
    );
}

export default WelcomeModal;

