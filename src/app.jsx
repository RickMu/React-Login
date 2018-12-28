
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, HomePageAppButton } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { HomeAppBar } from './components/common/AppBar/AppBar';

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


const LoginApp = () => {
    return (
        <div>
        <HomeAppBar name="Example App" pages={pages} component={HomePageAppButton}/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
        </Switch>
        
        </div>
    );
}

export { LoginApp };