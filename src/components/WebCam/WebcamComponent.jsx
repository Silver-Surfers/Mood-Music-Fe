import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Webcam from 'react-webcam';
import { fetchImage, setImage } from '../../actions/azureActions';
import { setToken } from '../../actions/spotifyActions';
import PropTypes from 'prop-types';
import styles from './WebcamComponent.css';


export const WebcamCapture = ({ location }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const { search } = location;
  const params = new URLSearchParams(search);
  const token = params.get('token');
  console.log(token);

  const capture = useCallback(async() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    await dispatch(setImage(imageSrc));
    history.push('/image');
  }, [webcamRef, setImage]);

  useEffect(() => {
    if(token) dispatch(setToken(token));

  }, []);

  useEffect(async() => {
   
    if(!imgSrc) return;
    const res = await fetch(imgSrc);
    const blob = await res.blob();
    // const arr = await blob.arrayBuffer();

    dispatch(fetchImage(blob));
  
  }, [imgSrc]);


  
  return (
    
    <div className={styles.bigBox}>
      <Webcam

        className={styles.webcam}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
    
    </div>
  );
};

WebcamCapture.propTypes = {
  location: PropTypes.object.isRequired
};
