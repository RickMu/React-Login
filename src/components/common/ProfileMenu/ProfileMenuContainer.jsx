import React from 'react';
import { userActions } from '../../../_actions';
import auth0 from '../../../_service/auth0';
import ProfileMenu from './ProfileMenu';
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(userActions.logout(auth0.logout()))
})

const ProfileMenuContainer = props => <ProfileMenu {...props}/>


export default connect(null, mapDispatchToProps)(ProfileMenuContainer);