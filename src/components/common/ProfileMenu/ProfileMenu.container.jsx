import React, {Component} from 'react';
import { StyledProfileMenu } from './ProfileMenu';
import { MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { userActions } from '../../../_actions';

const mapDispatchToProps = dispatch => ({
  logout: service => dispatch(userActions.logout(service))
})

class ProfileMenuContainer extends Component {
    state = {
      open: false
    }
    
    handleToggle = () => {
      this.setState(prevState => ({open: !prevState.open}))
    }

    handleClose = () => {
      console.log("Close");
    }
    
    handleLogOut = () => {
      const { authService} = this.props;
      console.log(authService);
      this.props.logout(authService);
    }

    render(){

      return (
        <StyledProfileMenu open={this.state.open} handleClose={this.handleClose} handleToggle={this.handleToggle}>
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
        </StyledProfileMenu>
      );
    }
}

const ProfileMenu = connect(null,mapDispatchToProps) (ProfileMenuContainer);

export { ProfileMenu }