import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import { Typography } from '@material-ui/core';

export const LinkButton = ({link, text}) =>{
    return (
        <Button color="inherit" onClick={console.log("Clicked")}>
            <Link to={link} style={{textDecoration: 'none'}} onClick={console.log("Clicked")}>
                <Typography variant="h6">
                    {text}
                </Typography>
            </Link>
        </Button>
    )
}
