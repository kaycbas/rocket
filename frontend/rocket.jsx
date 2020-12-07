import React from "react";
import ReactDOM from "react-dom";

// TESTING
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    // TESTING
    window.signUp = SessionApiUtil.signUp;
    window.signIn = SessionApiUtil.signIn;
    window.signOut = SessionApiUtil.signOut;
    
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to Rocket 🚀</h1>, root);
});