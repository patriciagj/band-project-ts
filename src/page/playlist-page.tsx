import React from 'react';
import { useParams } from 'react-router-dom';
import albuns from '../data';

import List from '@mui/material/List';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';

import useStyles from './playlist-page.styles';

type AllSongsProps = {
  songs: any;
};

const AllSongs: React.FC<AllSongsProps> = () => {
  const classes = useStyles();
  const {
    album,
  }: {
    album: string;
  } = useParams();
  console.log(album);
  const currAlbum = albuns.find(curralbum => curralbum.title === album);
  console.log(currAlbum);

  return (
    <List>
      <li>
        {currAlbum?.songs.map(el => (
          <ol className={classes.list}>
            {el.id}. {el.name}
          </ol>
        ))}
      </li>
    </List>
  );
};

export const PlaylistPage: React.FC = () => {
  const classes = useStyles();
  const {
    album,
  }: {
    album: string;
  } = useParams();
  console.log(album);
  const currAlbum = albuns.find(curralbum => curralbum.title === album);
  console.log(currAlbum);

  const [showResults, setShowResults] = React.useState<boolean | string>(false);
  const onClick = () => setShowResults(!showResults);

  return (
    <div className={classes.playlist}>
      <Typography className={classes.title} variant='h6' component='div'>
        Playlist of {currAlbum?.title}
      </Typography>
      <Button variant='contained' color='secondary' onClick={onClick}>
        {showResults ? 'HIDE SONGS' : 'SEE ALL SONGS'}
      </Button>
      {showResults && <AllSongs songs={currAlbum?.songs} />}
    </div>
  );
};
