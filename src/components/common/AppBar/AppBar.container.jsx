
import React, {Component } from 'react'
import { StyledAppBarView } from './AppBar.presentation';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';
import { userActions } from '../../../_actions';
import { SignOutButton, LoginButton } from '../buttons';
import { CircularProgressIcon } from '../ProgressIcon/CircularIcon';

const selectAuthenticate = appState => appState.authenticate;
const selectIsAuthenticated = authenticate => authenticate.isAuthenticated;
const selectisLoading = authenticate => authenticate.loading;

const select = appState => ({
    isAuthenticated: selectIsAuthenticated(selectAuthenticate(appState)),
    isLoading: selectisLoading(selectAuthenticate(appState))
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
        const { authService, isAuthenticated, isLoading } = this.props;
        
        let TopRightIcon = <LoginButton/>

        if(isLoading){
            TopRightIcon = <CircularProgressIcon/>
        }
        else if(isAuthenticated){
            TopRightIcon = <SignOutButton action={() => this.props.logout(authService)} />
        }

        return (
           <StyledAppBarView {...this.props} open={this.state.drawer.open} toggleDrawer={this.toggleDrawer}>
                {TopRightIcon}
           </StyledAppBarView>
        )
    }
};

const HomeAppBar = connect(select, mapDispatchToProps)(AppBarContainer)

export { HomeAppBar };