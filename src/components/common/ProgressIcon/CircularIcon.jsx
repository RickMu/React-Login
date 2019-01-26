import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function StyledCircularProgressIcon(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} color="primary" />
    </div>
  );
}



export const CircularProgressIcon = withStyles(styles)(StyledCircularProgressIcon);