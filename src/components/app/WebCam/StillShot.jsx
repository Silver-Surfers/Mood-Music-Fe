import React from 'react';
import { useSelector } from 'react-redux';
import { selectImage, selectEmotion } from '../../../selectors/azureSelectors';

const StillShot = () => {
  
  const image = useSelector(selectImage);
  const emotion = useSelector(selectEmotion);
  return (
    <div>
      <img src={image} />
      <div>{emotion.anger}</div>
    </div>
  );
};

export default StillShot;
