import React, {Component } from 'react'
import { StyledAppBarView } from './AppBar';
import { connect } from 'react-redux';
import { AuthSelectors} from '../../../_selectors'
import LoginButton from '../buttons/LoginButton';
import SignUpButton from '../buttons/SignupButton';
import ProfileMenuContainer from '../ProfileMenu/ProfileMenuContainer';
import { AppCommonSelectors } from '../../../_selectors/appCommon_selectors/selectors';


const select = appState => ({
    isAuthenticated: AuthSelectors.selectIsAuthenticated(appState),
    isLoading: AuthSelectors.selectIsLoading(appState),
    displayName: AppCommonSelectors.selectPageName(appState) ? AppCommonSelectors.selectPageName(appState) : AppCommonSelectors.selectAppName(appState),
    appPages: AppCommonSelectors.selectAllPages(appState)
});




class AppBarContainer extends Component {

    render(){
        const {isAuthenticated } = this.props;
        
        return (
           <StyledAppBarView {...this.props} name={this.props.displayName} pages={this.props.appPages}>   
                {!isAuthenticated? <LoginButton/> : null}
                {!isAuthenticated? <SignUpButton/> : null}
                {isAuthenticated? <ProfileMenuContainer/> : null}
           </StyledAppBarView>
        )
    }

};

const HomeAppBar = connect(select)(AppBarContainer)

export { HomeAppBar };