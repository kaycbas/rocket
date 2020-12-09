import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
const DEMO_USER = {username: 'demo', password: 'apple123'};

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
        navLink: <Link className="switch-link" to="/signup">Sign up now &gt;</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: user => dispatch(signIn(user)),
        demoUser: () => dispatch(signIn(DEMO_USER))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);