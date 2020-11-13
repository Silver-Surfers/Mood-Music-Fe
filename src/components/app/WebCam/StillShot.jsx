import React from 'react';
import { useSelector } from 'react-redux';
import { selectImage } from '../../../selectors/azureSelectors';

const StillShot = () => {
  const image = useSelector(selectImage);

  return (
    <div>
      <img src={image} />
    </div>
  );
};

export default StillShot;
