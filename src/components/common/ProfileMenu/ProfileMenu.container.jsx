import React, {Component} from 'react';
import { StyledProfileMenu } from './ProfileMenu';

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

    render(){
      return (<StyledProfileMenu open={this.state.open} handleClose={this.handleClose} handleToggle={this.handleToggle}/>);
    }
}

const ProfileMenu = ProfileMenuContainer;

export { ProfileMenu }