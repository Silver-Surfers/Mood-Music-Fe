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
  console.log(playlist);

  
  useEffect(() => {
    dispatch(fetchMusic(emotion, token));
    
  }, []);

  return (
    <>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlist}`}
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media">
      </iframe>
    </>
  );
};
