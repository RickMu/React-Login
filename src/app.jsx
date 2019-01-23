
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CallbackPage } from './components/CallbackPage';
import { PrivateRoute } from './components/common/PrivateRoute';
import HomeContainer from './components/HomePage/HomeContainer';
import LoginContainer from './components/LoginPage/LoginContainer/LoginContainer';
import RegisterContainer from './components/RegisterPage/RegisterContainer/RegisterContainer';
import { HomeAppBar } from './components/common/AppBar/AppBarContainer';
import auth0 from './_service/auth0';
import { userActions } from './_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AuthSelectors } from './_selectors';
const pages = [
    {
        name:"Home Page",
        link:"/"
    },
    {
        name:"Login Page",
        link:"/login"
    },
    {
        name:"Register Page",
        link:"/register"
    }
];
//<Route exact path="/" component={HomePage}/>

const mapDispatchToProps = dispatch => bindActionCreators({
    authenticateSucceed: userActions.authenticateSucceed
}, dispatch);


const mapStateToProps = state => ({
    isAuthenticated: AuthSelectors.selectIsAuthenticated(state)
})

class LoginApp extends Component{

    componentWillMount(){
    
        if(!this.props.isAuthenticated){
            if(auth0.isAuthenticated()){
                this.props.authenticateSucceed()
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <HomeAppBar name="Example App" pages={pages} authService={auth0}/>
                <Switch>
                    <PrivateRoute exact path="/" redirectPath = "/login" condition={auth0.isAuthenticated()}
                        component={HomeContainer}/>
                    <PrivateRoute path="/login" redirectPath="/" condition={!auth0.isAuthenticated()} 
                        component={() => <LoginContainer authService={auth0}/>}/>
                    <Route path="/register" render={()=><RegisterContainer authService={auth0}/>}/>
                    <Route path="/callback" render={()=><CallbackPage authService={auth0}/>}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);