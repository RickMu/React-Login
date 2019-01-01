
import React, {Component } from 'react'
import { StyledAppBarView } from './AppBar.presentation';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';
import { userActions } from '../../../_actions';

const selectAuthenticate = appState => appState.authenticate;
const selectIsAuthenticated = authenticate => authenticate.isAuthenticated;

const select = appState => ({
    isAuthenticated: selectIsAuthenticated(selectAuthenticate(appState))
});

const mapDispatchToProps = dispatch => ({
    logout: service => dispatch(userActions.logout(service))
})

class AppBarContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            drawer: {
                open: false
            }
        };
    }

    toggleDrawer = () => {
        this.setState(state => {
            let newState = {...state};
            newState.drawer.open= !state.drawer.open;
            return newState;
        })
    }

    render(){
        const { isAuthenticated, authService } = this.props;

        return (
           <StyledAppBarView {...this.props} open={this.state.drawer.open} toggleDrawer={this.toggleDrawer} loggedIn={isAuthenticated} logout={() => this.props.logout(authService)}/>
        )
    }
};

const HomeAppBar = connect(select, mapDispatchToProps)(AppBarContainer)

export { HomeAppBar };