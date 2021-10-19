import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import useStyles from '../header/header.component.styles';

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position='fixed'>
        <Typography align='center' variant='h6'>
          Evanescence Discography
        </Typography>
      </AppBar>
    </div>
  );
};
