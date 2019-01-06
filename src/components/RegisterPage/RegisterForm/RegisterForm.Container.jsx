import React, {Component} from 'react';
import { StyledRegisterForm } from './RegisterForm.Presentation';
import { userActions } from '../../../_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Auth0 from '../../../_service/auth0';
import { Register } from '../../../_selectors/register_selectors/selectors';

const mapDispatchToProps = dispatch => (bindActionCreators({
    register: userActions.register
},dispatch));

const select = appState => ({
    isProcessing: Register.selectLoading(appState)
})

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
                isProcessing={this.props.isProcessing}
            />
        )
    }
}

const RegisterForm = connect(select, mapDispatchToProps)(ConnectedRegisterForm);

export { RegisterForm };