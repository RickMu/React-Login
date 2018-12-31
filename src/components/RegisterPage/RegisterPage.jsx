import React from 'react';
import { RegisterForm } from './RegisterForm/RegisterForm.Container';

const RegisterPage = (props) => {
    return (
        <div>
            <RegisterForm {...props}/>
        </div>
    )
};

export { RegisterPage };