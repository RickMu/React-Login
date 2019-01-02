import React from 'react';
import Auth from '../../_service/auth0';
import { SignOutButton } from '../common/buttons';
import { ProfileMenu } from '../common/ProfileMenu/ProfileMenu.container';

const HomePage = (props) => {
    return (
        <div>
            <h1>Home Page</h1>
            
            <ProfileMenu/>
        </div>
    )
}

export { HomePage };