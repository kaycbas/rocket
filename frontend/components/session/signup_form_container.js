import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: <Link className="switch-link" to="/signin">Already have an account? Log in now</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: user => dispatch(signUp(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);