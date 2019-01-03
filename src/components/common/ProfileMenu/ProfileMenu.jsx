import React, {Component} from 'react';
import { withStyles, Button, MenuItem, Menu, Typography, Avatar, IconButton } from '@material-ui/core';

import PermIdentityIcon from '@material-ui/icons/PermIdentityOutlined';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing.unit * 2,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.primary.secondary
    }
  });  


class ProfileMenuPresentation extends Component{
  
    state = {
      anchorEl: null
    }

    handleClick = event => {
      this.setState({anchorEl: event.currentTarget});
    }

    render() {
      const {classes, open, handleToggle} = this.props;
      return (
        <div className={classes.root}>
          <IconButton className={classes.avatar}
            aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={(event) => {
                this.handleClick(event);
                handleToggle();
              }
            }
          >
            <PermIdentityIcon color="primary"/>
          </IconButton>  
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={open}
            onClose={handleToggle}
          >
            {this.props.children}
          </Menu>
        </div>
      );
    }
 
}

export const StyledProfileMenu = withStyles(styles)(ProfileMenuPresentation);