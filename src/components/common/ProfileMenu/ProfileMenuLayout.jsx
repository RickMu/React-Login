import React, {Component} from 'react';
import { withStyles, Menu, IconButton } from '@material-ui/core';

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

class ProfileMenuLayout extends Component{
  
    state = {
      anchorEl: null,
      open: false
    }
    
    handleToggle = () => {
      this.setState(prevState => ({open: !prevState.open}))
    }

    handleClick = event => {
      this.setState({anchorEl: event.currentTarget});
    }

    render() {
      const {classes} = this.props;
      return (
        <div className={classes.root}>
          <IconButton className={classes.avatar}
            aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={(event) => {
                this.handleClick(event);
                this.handleToggle();
              }
            }
          >
            <PermIdentityIcon color="primary"/>
          </IconButton>  
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onClose={this.handleToggle}
          >
            {this.props.children}
          </Menu>
        </div>
      );
    }
 
}

export default withStyles(styles)(ProfileMenuLayout);