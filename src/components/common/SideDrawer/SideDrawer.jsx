import React, { Component } from 'react';
import { List, ListItem, ListItemText, Drawer, withStyles, ClickAwayListener, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    list: {
        width: 250
    }
};


class StyledAppSideDrawer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {classes, pages, isOpen, toggle} = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>
                    { pages.map((page,index) => (
                        <ListItem button key={page.name} onClick={toggle}>
                            <Link to={page.link} style={{textDecoration:'none'}}>
                                <Typography variant="h6">
                                    {page.name}
                                </Typography>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
        
        return (   
                <Drawer open={isOpen} onClose={toggle}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={toggle}
                        onKeyDown={toggle}
                    />
                    {sideList}
                </Drawer>
        )
    }
} 

const AppSideDrawer = withStyles(styles)(StyledAppSideDrawer);

export { AppSideDrawer };