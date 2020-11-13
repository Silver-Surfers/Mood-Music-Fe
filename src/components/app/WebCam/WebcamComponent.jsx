import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Webcam from 'react-webcam';
import { fetchImage, setImage } from '../../../actions/azureActions';

export const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    dispatch(setImage(imageSrc));
    history.push('/image');
  }, [webcamRef, setImgSrc, setImage]);

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
      {/* {imgSrc && (
        <img
          src={imgSrc}
        />
      )} */}
    </>
  );
};
