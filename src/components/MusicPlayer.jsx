import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectPlaylists } from '../selectors/spotifySelectors';
import { fetchMusic } from '../actions/spotifyActions';
import { selectEmotion } from '../selectors/azureSelectors';
import {
  emotionFunction,
  twoEmotions,
  colorCodeFunction
} from '../utils/emotionFunction';
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
  const colorCode = colorCodeFunction(emotion);


  
  useEffect(() => {
    const singleEmotion = emotionFunction(emotion);
    const doubleEmotions = twoEmotions(singleEmotion);
    dispatch(fetchMusic(doubleEmotions, token));
    console.log(doubleEmotions);

    
  }, []);

  return (
    <section className={styles[colorCode]}>
      <div className={styles.bigBox}>
        {playlist &&
    <iframe
      src={`https://open.spotify.com/embed/playlist/${playlist}`}
      width="300"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      className={styles.player}>
    </iframe>
        }
        <div className={styles.controls}>
          <button className={styles.button} onClick={() => {
            history.push('/webcam');
          }}>Take another picture</button>
          <button className={styles.button} onClick={() => {
            history.push('/media');
          }}>Get a different playlist</button>
        </div>
        <button className={styles.button} onClick={() => {
          history.push('/');
        }}>Home</button>
      </div>
    </section>
  );
};
