import React, { useEffect, useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import ReactDOM from 'react-dom';
import { makeRequest } from '../../services/mood-music-api';

export const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  
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
    await makeRequest(arr);
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
  
ReactDOM.render(<WebcamCapture />, document.getElementById('root'));
