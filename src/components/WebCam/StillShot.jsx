import React from 'react';
import { useHistory } from 'react-router-dom';



import { useSelector } from 'react-redux';
import { selectImage, selectEmotion } from '../../selectors/azureSelectors';



export const StillShot = () => {
  console.log(location);
  const image = useSelector(selectImage);
  const emotion = useSelector(selectEmotion);
  const history = useHistory(); 
 

  return (
    <>
      <div>
        <img src={image} />
        <p>anger: {emotion.anger}</p>
        <p>contempt: {emotion.contempt}</p>
        <p>disgust: {emotion.disgust}</p>
        <p>fear: {emotion.fear}</p>
        <p>happiness: {emotion.happiness}</p>
        <p>neutral: {emotion.neutral}</p>
        <p>sadness: {emotion.sadness}</p>
        <p>surprise: {emotion.surprise}</p>
      </div>
      <div>
        <button onClick={() => {
          history.push('/webcam');
        }}>Retake Your Picture</button>
        <button onClick={() => {
          history.push('/media');
        }}>Submit for Playlist</button>
      </div>
    </>
  );
};




