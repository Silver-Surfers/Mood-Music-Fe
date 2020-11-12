import React, { useEffect, useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import ReactDOM from 'react-dom';
import { makeRequest } from '../sandbox';

export const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  console.log(imgSrc);

  useEffect(async() => {
    await makeRequest({ 'url': `${imgSrc}` });
  }, [imgSrc]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        forceScreenshotSourceSize="true"
        minScreenshotHeight="500"
        minScreenshotWidth="500"

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




