import React, { Component } from 'react';
import { LoginForm } from './LoginForm';

const LoginPage = (props) => {
    return (
        <div>
            <LoginForm {...props} />
        </div>
    )
};

export { LoginPage };