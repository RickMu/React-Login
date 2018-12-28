import React, {Component} from 'react';
import { StyledRegisterForm } from './RegisterForm.Presentation';

class RegisterForm extends Component{
    state={
        firstname: "",
        lastname: "",
        email: "",
        password:"",
        passwordRepeatedCorrectly: null
    }

    handleOnChange = (object) => {
        let target = object.target;
        this.setState({[target.name]: target.value});
    }

    handleOnFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    handleOnPasswordRepeatChange = (object) => {
        let target = object.target;
        
        if(this.state.password === target.value){
            this.setState({passwordRepeatedCorrectly: true});
        }else {
            this.setState({passwordRepeatedCorrectly: false});
            object.error = true;
        }
    }

    render(){
        return (
            <StyledRegisterForm
                onInputChange={this.handleOnChange}
                onFormSubmit={this.handleOnFormSubmit}
                passwordRepeatedCorrectly={this.state.passwordRepeatedCorrectly}
                onPasswordRepeatChange={this.handleOnPasswordRepeatChange}
            />
        )
    }
}

export { RegisterForm };