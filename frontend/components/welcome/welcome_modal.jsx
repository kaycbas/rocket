import React, { Component } from 'react';

function WelcomeModal() {

    const closeModal = () => {

    }

    return (
        <div className="welcome-background">
            <div className="welcome-modal">
                {/* <div className="welcome-border-top"></div> */}
                <span onClick={} className="close-modal-btn">&#x2715;</span>
                <h1>Welcome to Rocket!</h1>
                <p>Simply, Rocket lets you save articles for later reading.</p>
                <p>But it's also a powerful tool to organize and track your consumption of content from around the internet.</p>
                <h1>Some tips:</h1>
                <p>• Featured articles can be found and saved from the <span>Discover</span> tab</p>
                <p>• Articles can also be saved by clicking the <span>+</span> icon in the navbar and pasting in an article URL (try an article from Medium!)</p>
                <p>• Saved articles show up in the <span>My List</span> tab. From here you can favorite, tag, archive, or delete your saved articles.</p>
                {/* <div className="welcome-border-bottom"></div> */}
            </div>
        </div>
    );
}

export default WelcomeModal;

