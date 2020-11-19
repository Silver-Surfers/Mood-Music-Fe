import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEmotion, selectImage } from '../../selectors/azureSelectors';
import { Graph } from './Graph';
import styles from './StillShot.css';


export const StillShot = () => {
  const image = useSelector(selectImage);
  const history = useHistory(); 
  const emotion = useSelector(selectEmotion);
 

  return (
    <div className={styles.bigBox}>
      <div >
        <img src={image} />
        <div className={styles.graphBox}>
          <div className={styles.groupA}>
            <p className={styles.anger}>anger</p>
            <p className={styles.contempt}>contempt</p>
            <p className={styles.disgust}>disgust</p>
            <p className={styles.fear}>fear</p>
          </div>
          {emotion &&
          <Graph className={styles.graph}/>
          }
          <div className={styles.groupB}>
            <p className={styles.happiness}>happiness</p>
            <p className={styles.neutral}>neutral</p>
            <p className={styles.sadness}>sadness</p>
            <p className={styles.surprise}>surprise</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => {
          history.push('/webcam');
        }}>Retake Your Picture</button>
        <button onClick={() => {
          history.push('/media');
        }}>Submit for Playlist</button>
      </div>
    </div>
  );
};
