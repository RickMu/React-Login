import React, { Component } from 'react';
import { StyledLoginForm } from './LoginForm.Presentation';
import { connect } from 'react-redux';
import { userActions } from '../../../_actions';
import { bindActionCreators} from 'redux';
import { selectLogin, selectLoginFailed } from '../../../_selectors';

const select = appState => ({
    loginState: selectLogin(appState),
    loginFailed: selectLoginFailed(appState)
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

    handleOnFormSubmit = (event, authService = this.props.authService) => {
        event.preventDefault();
        this.props.login(this.state,authService);
    }

    render(){
        return (
            <StyledLoginForm
                onInputChange={this.handleOnChange}
                onFormSubmit={this.handleOnFormSubmit}
                loginFailed = {this.props.loginFailed}
            />
        )
    }
}

const LoginForm = connect(select, mapDispatchToProps)(ConnectedLoginForm);
export { LoginForm };