import React from 'react';
import Auth from '../../_service/auth0';
const HomePage = (props) => {
    new Auth().login();
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export { HomePage };