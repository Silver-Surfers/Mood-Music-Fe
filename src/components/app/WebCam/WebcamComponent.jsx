import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Webcam from 'react-webcam';
import { selectEmotion } from '../../../selectors/azureSelectors';
import {
  fetchImage,
  setImage
} from '../../../actions/azureActions';

export const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  // const emotion = useSelector(selectEmotion);

  const capture = useCallback(async() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    await dispatch(setImage(imageSrc));
    history.push('/image');
  }, [webcamRef, setImage]);

  useEffect(async() => {
    if(!imgSrc) return;
    const res = await fetch(imgSrc);
    const blob = await res.blob();
    const arr = await blob.arrayBuffer();
    console.log(blob);
    console.log(arr);
    dispatch(fetchImage(blob));
  }, [imgSrc]);
  
  return (
    
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
    
      
      {imgSrc && (
        <>
          <img
            src={imgSrc}
          />
          {/* <div>{emotion.anger}</div> */}
        </>
      )}
    </>
  );
};
