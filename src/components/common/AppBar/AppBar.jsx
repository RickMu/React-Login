import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppSideDrawer from '../SideDrawer/SideDrawer';

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

class AppBarView extends Component{

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

    render() {
        const {classes, name, pages} = this.props;
        return (
            <React.Fragment>
                    <AppBar position="static" style={{margin:0}}>
                        <Toolbar>
                            <IconButton onClick={this.toggleDrawer} className = {classes.menuButton} color='inherit' aria-label="Menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h5" color='inherit' className={classes.grow}>
                                {name}
                            </Typography>
                            {this.props.children}
                        </Toolbar>
                    </AppBar>
                    <AppSideDrawer toggle={this.toggleDrawer} isOpen={this.state.drawer.open} pages={pages}/>
            </React.Fragment>
        )
    }
}

const StyledAppBarView = withStyles(styles)(AppBarView);

export { StyledAppBarView };