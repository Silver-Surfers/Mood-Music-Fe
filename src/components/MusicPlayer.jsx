import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectPlaylists } from '../selectors/spotifySelectors';
import { fetchMusic } from '../actions/spotifyActions';


export const MusicPlayer = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const emotion = 'anger';
  const playlists = useSelector(selectPlaylists);
  const num = Math.ceil(Math.random() * playlists.length);
  const playlist = playlists[num];
  
  
  useEffect(() => {
    dispatch(fetchMusic(emotion, token));
    
  }, []);

  return (
    <>
      <h1>This is the token {token}</h1>
    </>
  );
};
