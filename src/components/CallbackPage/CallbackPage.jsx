import React from 'react';

export const CallbackPage = ({authService}) => {

    authService.handleAuthentication().then(()=>{
        console.log("Handle Success")
    }).catch((err) => console.log(err));
    const session = JSON.stringify(authService.getSession());
    
    return (
        <div>
            <h2>Callback Page</h2>
            <div>{session}</div>
        </div>
    )
}