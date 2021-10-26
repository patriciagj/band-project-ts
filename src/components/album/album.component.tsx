import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import useStyles from './album.component.styles';

type AlbumProps = {
  title: string;
  imageUrl: string;
};

export const Album: React.FC<AlbumProps> = props => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='200'
        image={props.imageUrl}
        alt='album'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h6'
          component='div'
          align='center'
        >{`${props.title}`}</Typography>
        <CardActions className={classes.content}>
          <Link to={`/${props.title}`}>Playlist</Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};
