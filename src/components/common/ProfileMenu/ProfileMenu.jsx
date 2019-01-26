import React, {Component} from 'react';
import ProfileMenuLayout from './ProfileMenuLayout';
import { MenuItem } from '@material-ui/core';

class ProfileMenu extends Component {
    
    handleLogOut = () => {
      this.props.logout();
    }

    render(){

      return (
        <ProfileMenuLayout>
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
        </ProfileMenuLayout>
      );
    }
}

export default ProfileMenu