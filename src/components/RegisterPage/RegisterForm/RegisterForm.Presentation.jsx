import { withStyles, Paper, Typography, InputLabel, FormControl, Input, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import React from 'react';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit*3,
        marginRight: theme.spacing.unit*3,
        [theme.breakpoints.up(200 + theme.spacing.unit * 3 * 2)]: {
            width: 600,
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
        marginTop: theme.spacing.unit,
        
    },
    
    submit: {
        marginTop: theme.spacing.unit * 3,
    }
})



const StyledRegisterForm = (props) => {
    const { classes, onInputChange, onFormSubmit, onPasswordRepeatChange, passwordRepeatedCorrectly} = props;

    let passwordRepeatedFieldShouldError = false;
    if(passwordRepeatedCorrectly === null || passwordRepeatedCorrectly){
        passwordRepeatedFieldShouldError = false;
    }else{
        passwordRepeatedFieldShouldError=true;
    }

    return (
        <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={onFormSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="firstname">First Name</InputLabel>
                        <Input id="firstname" name="firstname" autoComplete="firstname" autoFocus onChange={onInputChange}/>
                    </FormControl>

                    <FormControl margin="normal" required fullWidth >
                        <InputLabel htmlFor="lastname">Last Name</InputLabel>
                        <Input id="lastname" name="lastname" autoComplete="lastname" onChange={onInputChange}/>
                    </FormControl>

                    <FormControl margin="normal" required fullWidth >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" name="email" autoComplete="email" onChange={onInputChange}/>
                    </FormControl>
                    
                    <FormControl margin="normal" required fullWidth >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" name="password" autoComplete="curent-password" onChange={onInputChange}/>
                    </FormControl>
                    
                    <FormControl margin="normal" required fullWidth error={passwordRepeatedFieldShouldError}>
                        <InputLabel htmlFor="password">Repeat Password</InputLabel>
                        <Input id="password_repeat" type="password" name="password_repeat" autoComplete="password_repeat" onChange={onPasswordRepeatChange}/>
                    </FormControl>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign up
                    </Button>
                </form>
            </Paper>
        </main>
    )
}

const RegisterForm = withStyles(styles)(StyledRegisterForm)



export { RegisterForm as StyledRegisterForm};