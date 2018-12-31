
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, HomePageAppButton } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { HomeAppBar } from './components/common/AppBar/AppBar';
import { CallbackPage } from './components/CallbackPage';
import Auth0 from './_service/auth0';

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

const auth0 = new Auth0();

const LoginApp = () => {
    return (
        <div>
        <HomeAppBar name="Example App" pages={pages} component={HomePageAppButton}/>
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

export { LoginApp };