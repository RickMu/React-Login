import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import { Typography } from '@material-ui/core';

export const LinkButton = ({link, text}) =>{
    return (
        <Button color="inherit">
            <Link to={link} style={{textDecoration: 'none'}}>
                <Typography variant="h6">
                    {text}
                </Typography>
            </Link>
        </Button>
    )
}
