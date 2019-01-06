import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppSideDrawer } from '../SideDrawer/SideDrawer';
import { LoginButton, SignOutButton } from '../buttons';
import { CircularProgress } from '@material-ui/core';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
  };

const AppBarView = ({classes, name, pages, open, toggleDrawer, children}) => {
    return (
        <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={toggleDrawer} className = {classes.menuButton} color='inherit' aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h5" color='inherit' className={classes.grow}>
                            {name}
                        </Typography>
                        {children}
                    </Toolbar>
                </AppBar>
                <AppSideDrawer pages={pages} toggle={toggleDrawer} isOpen={open}/>
        </React.Fragment>
    )
}

const StyledAppBarView = withStyles(styles)(AppBarView);

export { StyledAppBarView };