
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, HomePageAppButton } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { CallbackPage } from './components/CallbackPage';
import { HomeAppBar } from './components/common/AppBar';
import { connect } from 'react-redux';
import { AppCommonSelectors } from './_selectors/appCommon_selectors/selectors';

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

const select = appState => ({
    redirect: AppCommonSelectors.selectNeedRedirect(appState),
    nextPage: AppCommonSelectors.selectNextPage(appState)
});

class ConnectedLoginApp extends Component{
    render() {
        const { auth0 } = this.props;
        return (
            <div>
            <HomeAppBar name="Example App" pages={pages} authService={auth0}/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" render={() => <LoginPage authService={auth0}/>}/>
                <Route path="/register" render={()=><RegisterPage authService={auth0}/>}/>
                <Route path="/callback" component={
                    () => {
                        return (<CallbackPage authService={auth0}/>);
                    }
                }/>
            </Switch>
            </div>
        );
    }
}

const LoginApp = connect(select)(ConnectedLoginApp);

export { LoginApp };