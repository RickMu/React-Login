import React, {Component} from 'react';
import { StyledRegisterForm } from './RegisterForm.Presentation';
import { userActions } from '../../../_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Auth0 from '../../../_service/auth0';

const mapDispatchToProps = dispatch => (bindActionCreators({
    register: userActions.register
},dispatch));


class ConnectedRegisterForm extends Component{
    
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

    handleOnFormSubmit = (event, authService =this.props.authService) => {
        event.preventDefault();
        this.props.register(this.state,authService);
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

const RegisterForm = connect(null, mapDispatchToProps)(ConnectedRegisterForm);

export { RegisterForm };