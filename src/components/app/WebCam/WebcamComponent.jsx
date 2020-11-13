import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';
import { fetchImage } from '../../../actions/azureActions';

export const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const dispatch = useDispatch();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

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
        <img
          src={imgSrc}
        />
      )}
    </>
  );
};
