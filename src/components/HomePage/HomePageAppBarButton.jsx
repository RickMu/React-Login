import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import { Typography } from '@material-ui/core';

const HomePageAppButton = () =>{
    return (
        <Button color="inherit">
            <Link to='/login' style={{textDecoration: 'none'}}>
                <Typography variant="h6">
                    Login
                </Typography>
            </Link>
        </Button>
    )
}

export { HomePageAppButton };