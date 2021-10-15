import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import useStyles from './album.component.styles';

type AlbumProps = {
  title: string;
  imageUrl: string;
};

export const Album: React.FC<AlbumProps> = props => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component='img'
        height='140'
        image={props.imageUrl}
        alt='album'
      />
      <CardActions className={classes.content}>
        <Button
          className={classes.title}
          size='small'
        >{`${props.title}`}</Button>
      </CardActions>
    </Card>
  );
};
