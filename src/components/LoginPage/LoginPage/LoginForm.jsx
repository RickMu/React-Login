import { withStyles, Paper, Typography, InputLabel, FormControl, Input, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { CircularProgressIcon } from '../../common/ProgressIcon/CircularIcon';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit*3,
        marginRight: theme.spacing.unit*3,
        [theme.breakpoints.up(200 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
          },
    },
    paper: {
        marginTop: theme.spacing.unit*8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit
    },
    
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    errorDiv:{
        marginTop: theme.spacing.uni*3
    }
})



const StyledLoginForm = (props) => {
    const { classes,onInputChange, onFormSubmit, isLoading } = props;
    return (
        <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                {
                isLoading ?
                    <CircularProgressIcon/>
                    :   
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                }   
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={onFormSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus onChange={onInputChange}/>
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" name="password" autoComplete="current-password" onChange={onInputChange}/>
                    </FormControl>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign in
                    </Button>
                    
                </form>
            </Paper>
        </main>
    )
}

const LoginForm = withStyles(styles)(StyledLoginForm)



export default LoginForm;