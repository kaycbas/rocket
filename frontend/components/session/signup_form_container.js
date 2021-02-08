import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, signUp, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/welcome_actions';
import SessionForm from './session_form';
const DEMO_USER = { username: 'demo', password: 'apple123' };

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: <Link className="switch-link" to="/home/signin">Already have an account? Log in now</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: user => dispatch(signUp(user)),
        demoUser: () => dispatch(signIn(DEMO_USER)),
        welcomeModal: () => dispatch(openModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);