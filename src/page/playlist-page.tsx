import React from 'react';
import { useParams } from 'react-router-dom';
import albuns from '../data';

type AllSongsProps = {
  songs: any;
};

const AllSongs: React.FC<AllSongsProps> = () => {
  const {
    album,
  }: {
    album: string;
  } = useParams();
  console.log(album);
  const currAlbum = albuns.find(curralbum => curralbum.title === album);
  console.log(currAlbum);

  return (
    <p>
      {currAlbum?.songs.map(el => (
        <ol className='song'>
          {el.id}. {el.name}
        </ol>
      ))}
    </p>
  );
};

export const PlaylistPage: React.FC = () => {
  const {
    album,
  }: {
    album: string;
  } = useParams();
  console.log(album);
  const currAlbum = albuns.find(curralbum => curralbum.title === album);
  console.log(currAlbum);

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);

  return (
    <div className='playlist'>
      Playlist of
      <h1>{currAlbum?.title}</h1>
      <button className='btn' onClick={onClick}>
        {showResults ? 'HIDE SONGS' : 'SEE ALL SONGS'}
      </button>
      {showResults && <AllSongs songs={currAlbum?.songs} />}
    </div>
  );
};
