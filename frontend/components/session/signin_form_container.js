import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/welcome_actions';
import SessionForm from './session_form';
const DEMO_USER = {username: 'demo', password: 'apple123'};

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log In',
        navLink: <Link className="switch-link" to="/home/signup">Sign up now &gt;</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: user => dispatch(signIn(user)),
        demoUser: () => dispatch(signIn(DEMO_USER)),
        welcomeModal: () => dispatch(openModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);