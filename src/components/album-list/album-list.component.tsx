import React from 'react';

import { Album } from '../album/album.component';

import albuns from '../../data';

import Grid from '@mui/material/Grid';

import useStyles from './album-list.component.styles';

export const AlbumList: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.grid} container spacing={4}>
        {albuns.map(({ id, ...otherSectionProps }) => (
          <Album key={id} {...otherSectionProps} />
        ))}
      </Grid>
    </div>
  );
};
