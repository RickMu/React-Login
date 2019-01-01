import React from 'react';
import { bindActionCreators } from 'redux';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    authenticate: userActions.authenticate
}, dispatch));

const ConnectedCallbackPage = ({authenticate, authService}) => {

    authenticate(authService);

    return (
        <div>
            <h2>Callback Page</h2>
        </div>
    )
}

export const CallbackPage = connect(null,mapDispatchToProps)(ConnectedCallbackPage);