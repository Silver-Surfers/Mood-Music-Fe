import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectPlaylists } from '../selectors/spotifySelectors';
import { fetchMusic } from '../actions/spotifyActions';
import { selectEmotion } from '../selectors/azureSelectors';
import { emotionFunction, twoEmotions } from '../utils/emotionFunction';
import { useHistory } from 'react-router-dom';

export const MusicPlayer = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const emotion = useSelector(selectEmotion);
  const playlists = useSelector(selectPlaylists);
  const num = Math.ceil(Math.random() * playlists.length);
  const playlist = playlists[num];
  console.log(emotion, 'This is the emotion list');
  const history = useHistory();
  


  
  useEffect(async() => {
    const singleEmotion = await emotionFunction(emotion);
    const doubleEmotions = await twoEmotions(singleEmotion);
    console.log('This is the emotion result', doubleEmotions);
    await dispatch(fetchMusic(doubleEmotions, token));

    
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
      <button onClick={() => {
        history.push('/webcam');
      }}>Take another picture</button>
    </>
  );
};
