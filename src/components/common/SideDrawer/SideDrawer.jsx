import React, { Component } from 'react';
import { Drawer, withStyles, List, Typography, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom'
const styles = {
    list: {
        width: 250
    }
};


class StyledAppSideDrawer extends Component {

    render() {
        const {classes, isOpen, toggle, pages} = this.props;
        const sideList = (
            <div className={classes.list}>
                { pages ? <List>
                    { pages.map((page,index) => (
                        <ListItem button key={page.pageName} onClick={toggle}>
                            <Link to={page.pageLink} style={{textDecoration:'none'}}>
                                <Typography variant="h6">
                                    {page.pageName}
                                </Typography>
                            </Link>
                        </ListItem>
                    ))}
                </List> : null}
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

export default AppSideDrawer ;