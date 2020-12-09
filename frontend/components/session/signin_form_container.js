import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
        navLink: <Link className="switch-link" to="/signup">Sign up now &gt;</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signIn(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);