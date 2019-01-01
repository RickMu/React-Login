import Button from '@material-ui/core/Button';
import React from 'react';
import { Typography } from '@material-ui/core';

export const ActionButton = ({onClick, text}) =>{
    return (
        <Button color="inherit" onClick={onClick}>
                <Typography variant="h6">
                    {text}
                </Typography>
        </Button>
    )
}
