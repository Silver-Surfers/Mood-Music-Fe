import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectPlaylists } from '../selectors/spotifySelectors';
import { fetchMusic } from '../actions/spotifyActions';
import { selectEmotion } from '../selectors/azureSelectors';
import { emotionFunction, twoEmotions } from '../utils/emotionFunction';
import { useHistory } from 'react-router-dom';
import styles from './MusicPlayer.css';

export const MusicPlayer = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const emotion = useSelector(selectEmotion);
  const playlists = useSelector(selectPlaylists);
  const num = Math.ceil(Math.random() * playlists.length);
  const playlist = playlists[num];
  const history = useHistory();
  
  useEffect(() => {
    const singleEmotion = emotionFunction(emotion);
    const doubleEmotions = twoEmotions(singleEmotion);
    dispatch(fetchMusic(doubleEmotions, token));
    console.log(doubleEmotions);

    
  }, []);

  return (
    <div className={styles.bigBox}>
      {playlist &&
    <iframe
      src={`https://open.spotify.com/embed/playlist/${playlist}`}
      width="300"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </iframe>
      }
      <div className={styles.controls}>
        <button onClick={() => {
          history.push('/webcam');
        }}>Take another picture</button>
        <button onClick={() => {
          history.push('/media');
        }}>Get a different playlist</button>
      </div>
      <div className={styles.waveform}></div>
    </div>
  );
};
