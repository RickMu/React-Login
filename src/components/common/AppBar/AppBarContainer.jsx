
import React, {Component } from 'react'
import { StyledAppBarView } from './AppBar';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';
import { userActions } from '../../../_actions';
import { SignOutButton, LoginButton } from '../buttons';
import { CircularProgressIcon } from '../ProgressIcon/CircularIcon';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu.container';
import { AuthSelectors} from '../../../_selectors'


const select = appState => ({
    isAuthenticated: AuthSelectors.selectIsAuthenticated(appState),
    isLoading: AuthSelectors.selectIsLoading(appState)
});

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

        if(isLoading || isAuthenticated){
            // TopRightIcon = <SignOutButton action={() => this.props.logout(authService)} />
            TopRightIcon = <ProfileMenu authService={authService}/>
        }

        return (
           <StyledAppBarView {...this.props} open={this.state.drawer.open} toggleDrawer={this.toggleDrawer}>
                {TopRightIcon}
           </StyledAppBarView>
        )
    }
};

const HomeAppBar = connect(select)(AppBarContainer)

export { HomeAppBar };