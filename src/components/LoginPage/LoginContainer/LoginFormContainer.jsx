import React, { Component } from 'react';
import LoginForm from '../LoginPage/LoginForm';
import { connect } from 'react-redux';
import { userActions } from '../../../_actions';
import { bindActionCreators} from 'redux';
import {selectLoginFailed, selectIsLoading } from '../../../_selectors';
import auth0 from '../../../_service/auth0'


const select = appState => ({
    isLoading: selectIsLoading(appState),
    loginFailed: selectLoginFailed(appState)
});

const mapDispatchToProps = dispatch => (bindActionCreators({
    login: (state) => userActions.login(state, () => auth0.login(state.email,state.password))
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

    handleOnFormSubmit = async (event) => {
        event.preventDefault();
        await this.props.login(this.state);
    }

    render(){
        return (
            <LoginForm
                onInputChange={this.handleOnChange}
                onFormSubmit={this.handleOnFormSubmit}
                loginFailed = {this.props.loginFailed}
                isLoading = {this.props.isLoading}
            />
        )
    }
}

const LoginFormContainer = connect(select, mapDispatchToProps)(ConnectedLoginForm);
export default LoginFormContainer;