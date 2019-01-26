
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
import AppActions from './_actions/AppCommon';
import CallbackPage from './components/CallbackPage/CallbackPage';


const mapDispatchToProps = dispatch => bindActionCreators({
    authenticateSucceed: userActions.authenticateSucceed,
    initApp: ({appName, pages}) => AppActions.init({appName,pages})
}, dispatch);


const mapStateToProps = state => ({
    isAuthenticated: AuthSelectors.selectIsAuthenticated(state)
})

class LoginApp extends Component{

    componentDidMount(){
        this.props.initApp({
            appName: "Login App",
            pages: [
                { 
                    pageName: "Home",
                    pageLink: "/"
                },
                { 
                    pageName: "Login",
                    pageLink: "login"
                },
                { 
                    pageName: "SignUp",
                    pageLink: "register"
                }
            ]
        }); 
        if(!this.props.isAuthenticated){
            if(auth0.isAuthenticated()){
                this.props.authenticateSucceed()
            }
        }
    }


    render() {
        return (
            <React.Fragment>
                <HomeAppBar name="Example App"/>
                <Switch>
                    <PrivateRoute exact path="/" redirectPath = "/login" condition={auth0.isAuthenticated()}
                        component={HomeContainer}/>
                    <PrivateRoute path="/login" redirectPath="/" condition={!auth0.isAuthenticated()} 
                        component={LoginContainer}/>
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/callback" component={CallbackPage}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginApp));
// export default LoginApp;