import React, { Component } from 'react';
import { StyledLoginForm } from './LoginForm.Presentation';
import { connect } from 'react-redux';
import { userActions } from '../../../_actions';
import { bindActionCreators} from 'redux';

const select = appState => ({
    loginState: appState.login
});

const mapDispatchToProps = dispatch => (bindActionCreators({
    login: userActions.login
},dispatch));

class ConnectedLoginForm extends Component{
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
        this.props.login(this.state);
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

const LoginForm = connect(select, mapDispatchToProps)(ConnectedLoginForm);
export { LoginForm };