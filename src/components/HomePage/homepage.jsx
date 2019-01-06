import React from 'react';
import Auth from '../../_service/auth0';
import { SignOutButton } from '../common/buttons';
import { ProfileMenu } from '../common/ProfileMenu/ProfileMenu.container';
import AlbumPage from './AlbumPage/AlbumPage';
            
const HomePage = (props) => {
    return (
        <div>
            <AlbumPage/>
        </div>
    )
}

export { HomePage };
