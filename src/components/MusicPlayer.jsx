import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../selectors/spotifySelectors';
import { fetchMusic } from '../actions/spotifyActions';


export const MusicPlayer = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const emotion = 'anger';
  console.log(token);
  
  useEffect(() => {
    dispatch(fetchMusic(emotion, token));
    
  }, []);

  return (
    <>
      <h1>This is the token {token}</h1>
    </>
  );
};
