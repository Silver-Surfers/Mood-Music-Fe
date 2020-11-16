import React from 'react';
import { useSelector } from 'react-redux';
import { selectImage, selectEmotion } from '../../../selectors/azureSelectors';

const StillShot = () => {

  const image = useSelector(selectImage);
  const emotion = useSelector(selectEmotion);
  return (
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
  );
};

export default StillShot;
