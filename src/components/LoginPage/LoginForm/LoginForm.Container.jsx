import React, { Component } from 'react';
import { StyledLoginForm } from './LoginForm.Presentation';


class LoginForm extends Component{
    state={
        email: "",
        password: ""
    }

    handleOnChange = (object) => {
        let target = object.target;
        this.setState({[target.name]: target.value});
    }

    handleOnFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <StyledLoginForm
                onPasswordChange={this.handleOnChange}
                onEmailChange={this.handleOnChange}
                onFormSubmit={this.handleOnFormSubmit}
            />
        )
    }
}

export { LoginForm };