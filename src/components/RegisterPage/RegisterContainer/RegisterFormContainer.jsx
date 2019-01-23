import React, {Component} from 'react';
import { userActions } from '../../../_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Register } from '../../../_selectors/register_selectors/selectors';
import RegisterForm from '../RegisterPage/RegisterForm';
import auth0 from '../../../_service/auth0';


const mapDispatchToProps = dispatch => (bindActionCreators({
    register: (user) => userActions.register(user, 
        () => auth0.signup(user.email,user.password, {
            firstname: user.firstname,
            lastname: user.lastname
        })
    )

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

    handleOnFormSubmit = (event) => {
        event.preventDefault();
        this.props.register(this.state);
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
            <RegisterForm
                onInputChange={this.handleOnChange}
                onFormSubmit={this.handleOnFormSubmit}
                passwordRepeatedCorrectly={this.state.passwordRepeatedCorrectly}
                onPasswordRepeatChange={this.handleOnPasswordRepeatChange}
                isProcessing={this.props.isProcessing}
            />
        )
    }
}

const RegisterFormContainer = connect(select, mapDispatchToProps)(ConnectedRegisterForm);

export default RegisterFormContainer;